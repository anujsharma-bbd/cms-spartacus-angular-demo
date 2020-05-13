import { LayoutConfig } from '@spartacus/storefront';


export const gbLayoutConfig: LayoutConfig = {
    // deferredLoading: {
    //   strategy: DeferLoadingStrategy.DEFER,
    //   intersectionMargin: '50px',
    // },
    layoutSlots: {
        header: {
            md: {
                slots: [
                    'StrapLineBannerComponentSlotName',
                    // 'SiteContext',
                    'StaticLocationComponentSlot',
                    'SiteLinks',
                    'SiteLogo',
                    'SearchBox',
                    'HeaderRightlogoSlotName',
                    'MiniCart',
                    'NavigationBar',
                    'MiniBannerComponentSlotName'
                ],
            },
            xs: {
                slots: [
                    'StrapLineBannerComponentSlotName',
                    'StaticLocationComponentSlot',
                    'PreHeader',
                    'SiteLogo',
                    'SearchBox',
                    'HeaderRightlogoSlotName',
                    'MiniCart',
                    'MiniBannerComponentSlotName'
                ],
            },
        },
        navigation: {
            md: { slots: [] },
            xs: {
                slots: [
                    'SiteLogo',
                    'SearchBox',
                    'NavigationBar',
                    'SiteLinks',
                    'AppointmentComponentsForNavigationSlot'
                ],
            },
        },
        footer: {
            slots: ['Footer'],
        },
        LandingPage2Template: {
            pageFold: 'Section2B',
            slots: [
                'Section1',
                'Section2A',
                'Section2B',
                'Section2C',
                'Section3',
                'Section4',
                'Section5',
                'ColorLift',
                'MonochromeIdeas',
                'CustomerPick',
                'DiscoverBedroom',
                'EntertainStyle',
                'BestBuys',
                'Swatches',
                'Upto50Off',
                'MultipleBanner',
                'SingleBanShopNow',
                'ModernStyle',
                'CustomerPickList',
                'DoubleBanner',
                'ShareUrStyle',
                'GetInspired',
                'DressToImpress',
                'OnlineOrder',
                'MyFreedom',
                'ShopSofa',
                'BookAppointment'
            ],
        },

        ContentPage1Template: {
            slots: ['Section2A', 'Section2B'],
        },
        CategoryPageTemplate: {
            pageFold: 'Section2',
            slots: ['Section1', 'Section2', 'Section3', 'CustomerPickup'],
        },
        ProductListPageTemplate: {
            slots: [ 'ShopBySizeContentSlot', 'ShopByBudgetContentSlot', 'PopularCategories', 'ProductLeftRefinements',
            'ProductListSlot', 'FindYouSofaSlot', 'CustomerPickup', 'CategoryInfoSlot']
        },
        ProductGridPageTemplate: {
            slots: ['ShopBySizeContentSlot', 'ShopByBudgetContentSlot', 'PopularCategories', 'ProductLeftRefinements',
            'ProductGridSlot', 'FindYouSofaSlot', 'CustomerPickup', 'CategoryInfoSlot'],
        },
        SearchResultsListPageTemplate: {
            slots: [
                'Section2',
                'ShopBySizeContentSlot',
                'ShopByBudgetContentSlot',
                'PopularCategories',
                'ProductLeftRefinements',
                'SearchResultsListSlot',
                'Section4',
                'FindYouSofaSlot',
                'CustomerPickup',
                'CategoryInfoSlot'
            ],
        },
        SearchResultsGridPageTemplate: {
            slots: [
                'Section2',
                'ShopBySizeContentSlot',
                'ShopByBudgetContentSlot',
                'PopularCategories',
                'ProductLeftRefinements',
                'SearchResultsGridSlot',
                'Section4',
                'FindYouSofaSlot',
                'CustomerPickup',
                'CategoryInfoSlot'
            ],
        },
        ProductDetailsPageTemplate: {
            md: {
                pageFold: 'UpSelling',
            },
            xs: {
                pageFold: 'Summary',
            },
            slots: [
                'Summary',
                'UpSelling',
                'CrossSelling',
                'Tabs',
                'PlaceholderContentSlot',
            ],
        },
        CartPageTemplate: {
            slots: ['TopContent', 'CenterRightContentSlot', 'EmptyCartMiddleContent'],
        },
        AccountPageTemplate: {
            slots: ['BodyContent', 'SideContent'],
        },
        LoginPageTemplate: {
            slots: ['LeftContentSlot', 'RightContentSlot'],
        },
        ErrorPageTemplate: {
            slots: ['TopContent', 'MiddleContent', 'BottomContent'],
        },
        OrderConfirmationPageTemplate: {
            slots: ['BodyContent', 'SideContent'],
        },
        MultiStepCheckoutSummaryPageTemplate: {
            slots: ['TopContent', 'BodyContent', 'SideContent', 'BottomContent'],
        },
        CheckoutLoginPageTemplate: {
            slots: ['RightContentSlot'],
        },
    },
};
