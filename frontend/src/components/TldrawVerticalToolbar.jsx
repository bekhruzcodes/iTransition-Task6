import React from 'react';
import {Tldraw} from '@tldraw/tldraw';
import {useSyncDemo} from '@tldraw/sync'
import '@tldraw/tldraw/tldraw.css';

const TldrawVerticalToolbar = () => {
    const store = useSyncDemo({roomId: 'my-unique-room-id'})
    return (
        <div style={{position: 'relative', width: '100vw', height: '100vh'}}>
            <Tldraw store={store}/>
        </div>
    );
};

export default TldrawVerticalToolbar;