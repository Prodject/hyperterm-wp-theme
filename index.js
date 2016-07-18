exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor: '#2B2B2B',
    foregroundColor: '#A9B7C6',
    borderColor: '#2B2B2B',
    cursorColor: '#A9B7C6',
    colors: [
      '#2B2B2B', 
      '#C93B48', 
      '#6A8759', 
      '#CC7832', 
      '#589DF6', 
      '#AB51BA', 
      '#3DA0BF', 
      '#808080', 
      '#666666', 
      '#CC0414', 
      '#48AF0C', 
      '#CC620C', 
      '#096FF4', 
      '#9F16B7', 
      '#1597BF', 
      '#A9B7C6'  
    ],
    termCSS: `
      .cursor-node[focus=true]:not([moving]) {
        animation: blink 1s ease infinite;
      }
      @keyframes blink {
        0%, 40% { opacity: 0 }
        50%, 90% { opacity: 1 }
      }
    `,
    css: `
      ${config.css || ''}
      .hyperterm_main {
        border: none !important;
      }
      .header_header {
        position: initial;
        background: #CC7832 !important;
      }
      .tabs_list, .tab_active::before {
        border: 0;
      }
      .tabs_title, .tab_tab, .tab_text:hover {
        color: #FFFFFF;  
      }
      .tabs_title, .tab_active, .tab_text:hover {
        font-weight: bold;        
      }
      .tab_active {
        background: #2B2B2B;
      }      
    `
  });
};
