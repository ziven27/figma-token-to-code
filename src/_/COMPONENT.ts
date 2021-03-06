import CONFIG from "./CONFIG";

const COMPONENT = {
  isComponent: (node: SceneNode) => {
    // 'COMPONENT_SET' 目前不能作为组件的判断标准
    return node.type === 'INSTANCE' || node.type === 'COMPONENT';
  },
  getMainComponent: (node: InstanceNode | ComponentNode | ComponentSetNode) => {
    if (node.type === 'COMPONENT_SET' || node.type === 'COMPONENT') {
      return node;
    }
    // console.log(node, {isVariant});
    return node.mainComponent;
  },
  getComponentId: (node) => {
    // console.log(node);
    // @ts-ignore
    const {key = ''} = COMPONENT.getMainComponent(node) || {};
    return key;
  },
  stringToComponentName: (name = '') => {
    const trimName = name.trim();
    if (!trimName) {
      return '';
    }
    const strName = trimName.replace(/[\W]/g, '');
    const firstChar = strName.charAt(0).toUpperCase();
    if (strName.length === 1) {
      return firstChar;
    }
    return firstChar + strName.slice(1);
  },
  getComponentPropsByString: (strProp) => {
    const props = {};
    if (strProp && typeof strProp === 'string') {
      // 去掉单双引号
      const legalProps = strProp.replace(/\"/g, '').replace(/\'/g, '');
      legalProps.split(",").forEach((item) => {
        const [key, value] = item.split("=");
        const trimValue = String(value).trim();
        // false 表示没有这个值 不做处理
        if (trimValue === "false") {
          return;
        }
        props[String(key).trim()] = value ? trimValue : 'true';
      });
    }
    return props;
  },
  getInfo: (node: SceneNode) => {
    // @ts-ignore
    const id = COMPONENT.getComponentId(node);
    const matchToken = id ? CONFIG.getToken()[id] : '';
    // console.log({matchToken});
    if (!matchToken) {
      return null;
    }
    matchToken.props = {
      ...COMPONENT.getComponentPropsByString(matchToken.props || '')
    };

    // 用户没有指定表示要渲染
    if (!('renderChildren' in matchToken)) {
      matchToken.renderChildren = '1';
    }
    // 用户没有指定表示要渲染
    if (!('renderWidth' in matchToken)) {
      matchToken.renderWidth = '1';
    }
    // 用户没有指定表示要渲染
    if (!('renderHeight' in matchToken)) {
      matchToken.renderHeight = '1';
    }
    // console.log({matchToken});
    return matchToken;
  }
};

export default COMPONENT;
