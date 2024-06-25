import React, { useEffect, useState } from 'react';
import hljs from 'highlight.js';
// import 'highlight.js/styles/monokai.css'; // 默认样式
import '../styles/Post.css'; // 自定义样式
import {Copy} from '../assets/icons'
import { CopyToClipboard } from 'react-copy-to-clipboard';


// theme-path: /home/django/Documents/Venv/React-Blog/frontend/node_modules/highlight.js/styles

const CodeBlock = ({ code, mod }) => {
  const[copied,setCopied] = useState(false)

  useEffect(() => {
    const loadTheme = async () => {
      switch (mod) {
        case 'light':
            await import('highlight.js/styles/atom-one-light.css');
            break;
        case 'dark':
            await import('highlight.js/styles/monokai.css');
            break;
        default:
            await import('highlight.js/styles/github.css');
            break;
      }
      hljs.highlightAll();
    };

    loadTheme();
  }, [code, mod]);

  const handleOnClick = () => {
    alert('test')
  }
  const handleOnCopy = () => {
    setCopied(true)
    setTimeout(()=>{
      setCopied(false)
    },1500)
  }

  return (
    <pre className='code-block'>
      <div className='code-block-bar'>
        <CopyToClipboard text={code} onCopy={handleOnCopy}>
          <div className='copy'>
            {copied ? <></> : <Copy className='copy-icon' width='15' height='15'/>}
            <spam className='copy-text'>{copied?'copied':'copy'}</spam>
          </div>
        </CopyToClipboard>
      </div>
      
      <code>
          {hljs.highlightAuto(code).value}
      </code>
    </pre>
  );
};

export default CodeBlock;
