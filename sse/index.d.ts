declare var EventSource: sse.IEventSourceStatic;

declare module sse {

    enum ReadyState {
        CONNETING = 0,
        OPEN = 1,
        CLOSED = 2
    }

    interface IEventSourceStatic extends EventTarget {
        new(url: string, eventSourceInitDict?: IEventSourceInit): IEventSourceStatic;
        url: string;
        withCredentials: boolean;
        CONNETING: ReadyState;
        OPEN: ReadyState;
        CLOSED: ReadyState;
        readyState: ReadyState;
        onopen: (event: Event) => any;
        onmessage: (event: IOnMessageEvent) => void;
        onerror: (event: Event) => any;
        close: () => void;
    }

    interface IEventSourceInit {
        withCredentials?: boolean;
    }

    interface IOnMessageEvent {
        data: string;
    }
}