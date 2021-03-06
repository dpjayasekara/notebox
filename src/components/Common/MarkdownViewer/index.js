import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import './markdown-viewer.css';

class MarkDownViewer extends React.Component {
    constructor(props){
        super(props);
        this.updateIframe = this.updateIframe.bind(this);
    }

    componentDidMount() {
        this.updateIframe();
    }

    componentDidUpdate() {
        this.updateIframe();
    }

    updateIframe() {
        /* eslint-disable react/no-string-refs */
        const iframe = this.refs.iframe;
        const document = iframe.contentDocument;
        const head = document.getElementsByTagName('head')[0];
        const styles = `
            * {
                font-family: 'Mali', cursive;
                color: #ab47bc
            }

            /* thai */
            @font-face {
                font-family: 'Mali';
                font-style: normal;
                font-weight: 400;
                src: local('Mali Regular'), local('Mali-Regular'), url(https://fonts.gstatic.com/s/mali/v1/N0ba2SRONuN4SDnED35yKd7vmA.woff2) format('woff2');
                unicode-range: U+0E01-0E5B, U+200C-200D, U+25CC;
            }
            /* vietnamese */
            @font-face {
                font-family: 'Mali';
                font-style: normal;
                font-weight: 400;
                src: local('Mali Regular'), local('Mali-Regular'), url(https://fonts.gstatic.com/s/mali/v1/N0ba2SRONuN4SCLED35yKd7vmA.woff2) format('woff2');
                unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Mali';
                font-style: normal;
                font-weight: 400;
                src: local('Mali Regular'), local('Mali-Regular'), url(https://fonts.gstatic.com/s/mali/v1/N0ba2SRONuN4SCPED35yKd7vmA.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Mali';
                font-style: normal;
                font-weight: 400;
                src: local('Mali Regular'), local('Mali-Regular'), url(https://fonts.gstatic.com/s/mali/v1/N0ba2SRONuN4SC3ED35yKd4.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
            /* latin-ext */
            @font-face {
                font-family: 'Source Code Pro';
                font-style: normal;
                font-weight: 400;
                src: local('Source Code Pro'), local('SourceCodePro-Regular'), url(https://fonts.gstatic.com/s/sourcecodepro/v8/HI_SiYsKILxRpg3hIP6sJ7fM7PqlM-vWnsUnxlC9.woff2) format('woff2');
                unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
            }
            /* latin */
            @font-face {
                font-family: 'Source Code Pro';
                font-style: normal;
                font-weight: 400;
                src: local('Source Code Pro'), local('SourceCodePro-Regular'), url(https://fonts.gstatic.com/s/sourcecodepro/v8/HI_SiYsKILxRpg3hIP6sJ7fM7PqlPevWnsUnxg.woff2) format('woff2');
                unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
            }
        `
        try {
            document.body.innerHTML = marked(this.props.content);
        } catch (err) {
            document.body.innerHTML = 'failed to render markdown';
        }

        const styleEl = document.createElement('style');
        styleEl.innerHTML = styles;
        head.appendChild(styleEl);
        
        // this.props.stylesheets.forEach(url => {
        //     const ref = document.createElement('link');
        //     ref.rel = 'stylesheet';
        //     ref.type = 'text/css';
        //     ref.href = url;
        //     head.appendChild(ref);
        // });
    }

    render(){
        return <iframe id="markdown-iframe" className="markdown-content" ref="iframe"/>
    }
}

MarkDownViewer.propTypes = {
    content: PropTypes.string.isRequired
}

export default MarkDownViewer;