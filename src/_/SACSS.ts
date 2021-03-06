const SACSS = {
  data: {},
  init: () => {
    SACSS.data = {};
  },
  nameMap: {
    'fs': 'font-size',
    'lh': 'line-height',
    'ls': 'letter-space',
    'ff': 'font-family',
    'pt': 'padding-top',
    'pr': 'padding-right',
    'pb': 'padding-bottom',
    'pl': 'padding-left',
    'mt': 'margin-top',
    'mr': 'margin-right',
    'mb': 'margin-bottom',
    'ml': 'margin-left',
    'h': 'height',
    'w': 'width',
    'btlr': 'border-top-left-radius',
    'btrr': 'border-top-right-radius',
    'bbrr': 'border-bottom-right-radius',
    'bblr': 'border-bottom-left-radius',
    'br': 'border-radius'
  },
  getClassSelectorByName: (className = '') => {
    if (className.indexOf('.') > -1) {
      className = className.replace(/\./g, '\\.');
    }
    if (className.indexOf(':') > -1) {
      className = className.replace(/\:/g, '\\:');
    }
    if (className.indexOf('%') > -1) {
      className = className.replace(/\%/g, '\\%');
    }
    return className;
  },
  getString: () => {
    const data = SACSS.data;
    const keys = Object.keys(data).sort();
    const result = keys.map((name) => `.${SACSS.getClassSelectorByName(name)}{${data[name]};}`).join('\n');
    return result;
  },
  add: (name = '', value, unit = 'px') => {
    if (!name || !value) {
      return '';
    }
    const propName = SACSS.nameMap[name];
    if (!propName) {
      return '';
    }
    // 只保留两位小数
    const useValue = Number(value) ? parseFloat(Number(value).toFixed(2)) : value;
    // 如果是 px 不需要渲染
    const classUnit = unit === 'px' ? '' : unit;
    const className = `${name}${useValue}${classUnit}`;
    SACSS.data[className] = `${propName}:${useValue}${unit}`;
    return className;
  },
  addFontFamily: (value) => {
    if (!value) {
      return '';
    }
    const valueOk = value.replace(/[\W]/g, '').toLowerCase();
    const className = `ff_${valueOk}`;
    SACSS.data[className] = `font-family:"${value}"`;
    return className;
  },
  addColor: (rgba = []) => {
    if (!rgba && rgba.length) {
      return '';
    }
    const className = `c_${rgba.join('')}`;
    SACSS.data[className] = `color:rgba(${rgba.join(',')})`;
    return className;
  },
  addBgColor: (rgba = []) => {
    if (!rgba && rgba.length) {
      return '';
    }
    const className = `bc_${rgba.join('')}`;
    SACSS.data[className] = `background-color:rgba(${rgba.join(',')})`;
    return className;
  }
};
export default SACSS;
