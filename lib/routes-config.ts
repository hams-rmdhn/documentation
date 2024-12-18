// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      {
        title: "Free Plugins",
        href: "/free-plugins",
        items: [
          { title: "Bambu Runcing Security", href: "/bambu-runcing" },
          { title: "Dynamic Data", href: "/dynamic-data" },
          { title: "Inspirasi Player", href: "/inspirasi-player" },
          { title: "Onesender Sheet Broadcast", href: "/onesender-sheet-broadcast" },
          { title: "Simple Template", href: "/simple-template" },
        ],
      },
      {
        title: "Premium Plugins",
        href: "/premium-plugins",
        items: [
          { title: "Affiliate Partners", href: "/affiliate-partners" },
          { title: "Onesender Sheet Broadcast Pro", href: "/onesender-sheet-broadcast-pro" },
          { title: "PPDB Announcement", href: "/ppdb-announcement" },
          { title: "Table of Sheet", href: "/table-of-sheet" },
          { title: "Tabler Login", href: "/tabler-login" },
          { title: "Whatsapp Per Woo Product", href: "/whatsapp-per-woo-product" },
          { title: "Woo Cek Custom Resi", href: "/woo-cek-custom-resi" },
          { title: "Woo Marketplace Button", href: "/woo-marketplace-buttons" },
        ],
      },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
