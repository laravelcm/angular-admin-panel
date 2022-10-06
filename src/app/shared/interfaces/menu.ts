export interface Menu {
  group: string;
  items: MenuItem[];
}

export interface MenuItem {
  title: string;
  svgPath: string[];
  link: string;
  roles: string[];
  soon?: boolean;
}
