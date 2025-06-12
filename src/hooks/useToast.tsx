'use client';

// Inspired by react-hot-toast library
import { type ToastActionElement, type ToastProps } from '../components/Toast/Toast';
import { type ReactNode, useEffect, useState } from 'react';

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1_000_000;

type ToasterToast = ToastProps & {
    action?: ToastActionElement;
    description?: ReactNode;
    id: string;
    title?: ReactNode;
};

const actionTypes = {
    ADD_TOAST: 'ADD_TOAST',
    DISMISS_TOAST: 'DISMISS_TOAST',
    REMOVE_TOAST: 'REMOVE_TOAST',
    UPDATE_TOAST: 'UPDATE_TOAST',
} as const;

let count = 0;

const genId = () => {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
};

type Action =
    | {
          toast: Partial<ToasterToast>;
          type: ActionType['UPDATE_TOAST'];
      }
    | {
          toast: ToasterToast;
          type: ActionType['ADD_TOAST'];
      }
    | {
          toastId?: ToasterToast['id'];
          type: ActionType['DISMISS_TOAST'];
      }
    | {
          toastId?: ToasterToast['id'];
          type: ActionType['REMOVE_TOAST'];
      };

type ActionType = typeof actionTypes;

interface State {
    toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
    if (toastTimeouts.has(toastId)) {
        return;
    }

    const timeout = setTimeout(() => {
        toastTimeouts.delete(toastId);
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        dispatch({
            toastId,
            type: 'REMOVE_TOAST',
        });
    }, TOAST_REMOVE_DELAY);

    toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_TOAST':
            return {
                ...state,
                toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
            };

        case 'DISMISS_TOAST': {
            const { toastId } = action;

            // ! Side effects ! - This could be extracted into a dismissToast() action,
            // but I'll keep it here for simplicity
            if (toastId) {
                addToRemoveQueue(toastId);
            } else {
                for (const toRemoveToast of state.toasts) {
                    addToRemoveQueue(toRemoveToast.id);
                }
            }

            return {
                ...state,
                toasts: state.toasts.map((toRemoveToast) =>
                    toRemoveToast.id === toastId || toastId === undefined
                        ? {
                              ...toRemoveToast,
                              open: false,
                          }
                        : toRemoveToast,
                ),
            };
        }

        case 'REMOVE_TOAST':
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: [],
                };
            }

            return {
                ...state,
                toasts: state.toasts.filter((toRemoveToast) => toRemoveToast.id !== action.toastId),
            };

        case 'UPDATE_TOAST':
            return {
                ...state,
                toasts: state.toasts.map((toUpdateToast) =>
                    toUpdateToast.id === action.toast.id
                        ? { ...toUpdateToast, ...action.toast }
                        : toUpdateToast,
                ),
            };

        default:
            return state;
    }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

const dispatch = (action: Action) => {
    memoryState = reducer(memoryState, action);
    for (const listener of listeners) {
        listener(memoryState);
    }
};

type Toast = Omit<ToasterToast, 'id'>;

export const toast = ({ ...props }: Toast) => {
    const id = genId();

    const update = (updateProps: ToasterToast) =>
        dispatch({
            toast: { ...updateProps, id },
            type: 'UPDATE_TOAST',
        });
    const dismiss = () => dispatch({ toastId: id, type: 'DISMISS_TOAST' });

    dispatch({
        toast: {
            ...props,
            id,
            onOpenChange: (open) => {
                if (!open) dismiss();
            },
            open: true,
        },
        type: 'ADD_TOAST',
    });

    return {
        dismiss,
        id,
        update,
    };
};

export const useToast = () => {
    const [state, setState] = useState<State>(memoryState);

    useEffect(() => {
        listeners.push(setState);
        return () => {
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [state]);

    return {
        ...state,
        dismiss: (toastId?: string) => dispatch({ toastId, type: 'DISMISS_TOAST' }),
        toast,
    };
};
