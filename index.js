const BACKGROUND = '#2B2B2B';
const FOREGROUND = '#A9B7C6';
const BORDER_COLOR = '#CC620C';
const CURSOR_COLOR = '#A9B7C6';

const RED = '#C93B48';
const GREEN = '#6A8759';
const ORANGE = '#CC7832';
const BLUE = '#589DF6';
const MAGENTA = '#AD64BA';
const CYAN = '#3DA0BF';
const GREY = '#808080';
const BRIGHT_GREY ='#AAAAAA';
const WHITE = '#FFFFFF';

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor: BACKGROUND,
    foregroundColor: FOREGROUND,
    borderColor: BORDER_COLOR,
    cursorColor: CURSOR_COLOR,
    colors: [
      BACKGROUND,
      RED,
      GREEN,
      ORANGE,
      BLUE,
      MAGENTA,
      CYAN,
      GREY,
      BRIGHT_GREY,
      RED,
      GREEN,
      ORANGE,
      BLUE,
      MAGENTA,
      CYAN,
      FOREGROUND
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
        background: ${ORANGE} !important;
      }      
      .header_header {
        top: 0px;
        left: 0px;
        right: 0px;
        background: ${ORANGE} !important;
      }
      .terms_terms {
        background: ${BACKGROUND} !important;
      }
      .tabs_list, .tab_active::before {
        border: none !important;
      }
      .tabs_title, .tab_tab, .tab_text:hover {
        color: ${WHITE};  
      }
      .tabs_title, .tab_active, .tab_text:hover {
        font-weight: bold;        
      }
      .tab_tab {
        border-left: 1px solid ${BORDER_COLOR};
      }
      .tab_active {
        background: ${BACKGROUND};
      }
      .tab_active + li {
        border-left: none !important;
      }
      .tab_active.tab_tab, .tab_textActive {
        border: none !important;
      }
    `
  });
};
