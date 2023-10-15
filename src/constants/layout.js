
class MenuItem {
  /**
   * 
   * @param {Object} data 
   * @param {String} data.name
   * @param {String} data.type
   * @param {String} data.icon
   * @param {String} data.helpingAttribute
   * @param {String} data.customTitle
   * @param {boolean} data.isFavourite
   */
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.type = data.type;
    this.icon = data.icon;
    this.helpingAttribute = data.helpingAttribute;
    this.customTitle = data.customTitle;
    this.isFavourite = data.isFavourite;
  }
}

class Layout {
  constructor() {
    this.landingPage = "/home";
    this.menuItems = {
      DEFAULT: [
        new MenuItem({
          "name": "Home",
          "type": "button",
          "icon": "ant-design:home-filled",
          "helpingAttribute": "/home",
          "customTitle": "Steam Library",
          "isFavourite": false
        })
      ],
    };
    this.header = {
      "visibleOnDesktop": false,
      "visibleOnMobile": false,
      "useCustomColor": false,
      "color": "primary",
      "customColorCode": ""
    };
    this.bottomMobileNavigation = false;
    this.displayMobileMenuHam = false;
    this.menuButtonLabel = "Menu";
    this.sideMenu = {
      "permanent": false,
      "default": "open"
    };

    this.defaultContainerSX = {
      backgroundColor: 'background.default',
      display: 'flex', flexDirection: 'column',
      minHeight: '0px'
    };
  }

  /**
   * 
   * @param {String} userType 
   * @returns {Array<MenuItem>}
   */
  getMenuItems(userType) {
    switch (userType.toLowerCase()) {
      default: return this.menuItems.DEFAULT;
    }
  }
}

const instance = new Layout();
export default instance;