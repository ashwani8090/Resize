import React, { useState } from 'react';
import { Resizable } from 'react-resizable';
import './home.css';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const Home = () => {
    const { height, width } = getWindowDimensions();
    const [windowDimension, setWidowDimension] = useState({ width: width - 10, height: height - 10 });
    const onResize = (event, { element, size, handle }) => {
        setWidowDimension({ width: size.width, height: size.height });
    }

    return (<Resizable height={windowDimension.height} width={windowDimension.width} onResize={onResize}>
        <div className="box" style={{ width: windowDimension.width + 'px', height: windowDimension.height + 'px' }}>
            <iframe
                title='home'
                height={windowDimension.height}
                width={windowDimension.width}
                src='https://echarts.apache.org/examples/en/index.html'>
            </iframe>
        </div>
    </Resizable>)
}

export default Home;