using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Emart
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
               name: "Customize eShopper",
               url: "shop/customizeeshopper",
               defaults: new { controller = "Shop", action = "customizeeshopper" }
           );

            routes.MapRoute(
                name: "Create Shop",
                url: "shop/create",
                defaults: new { controller = "Shop", action = "Create"  }
            );

            routes.MapRoute(
                name: "Create UploadFile",
                url: "shop/uploadfile",
                defaults: new { controller = "Shop", action = "UploadFile" }
            );
            routes.MapRoute(
                name: "Create ImageRetrieve",
                url: "shop/imageretrieve",
                defaults: new { controller = "Shop", action = "ImageRetrieve" }
            );

            routes.MapRoute(
                name: "Create CategoryRetrieve",
                url: "shop/categoryretrieve",
                defaults: new { controller = "Shop", action = "CategoryRetrieve" }
            );

            routes.MapRoute(
                name: "Create BrandRetrieve",
                url: "shop/brandretrieve",
                defaults: new { controller = "Shop", action = "BrandRetrieve" }
            );
            routes.MapRoute(
                name: "Create ViewProduct",
                url: "shop/viewproduct",
                defaults: new { controller = "Shop", action = "ViewProduct" }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Customize Shop",
                url: "shop/Customize/{id}",
                defaults: new { controller = "Shop", action = "Customize" }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Customize Cart",
                url: "shop/Customize/{id}/cart",
                defaults: new { controller = "Shop", action = "Cart" }
            );
            
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Customize Checkout",
                url: "shop/Customize/{id}/checkout",
                defaults: new { controller = "Shop", action = "Checkout" }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Customize Login",
                url: "shop/Customize/{id}/login",
                defaults: new { controller = "Shop", action = "Login" }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Customize Contact",
                url: "shop/Customize/{id}/contact",
                defaults: new { controller = "Shop", action = "Contact" }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Customize 404",
                url: "shop/Customize/{id}/404",
                defaults: new { controller = "Shop", action = "Error" }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Customize Product",
                url: "shop/Customize/{id}/product",
                defaults: new { controller = "Shop", action = "Product" }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Customize ProductDetail",
                url: "shop/Customize/{id}/productdetail",
                defaults: new { controller = "Shop", action = "ProductDetail" }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Customize Blog",
                url: "shop/Customize/{id}/blog",
                defaults: new { controller = "Shop", action = "Blog" }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Customize BlogSingle",
                url: "shop/Customize/{id}/blogsingle",
                defaults: new { controller = "Shop", action = "BlogSingle" }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Customize WishList",
                url: "shop/Customize/{id}/wishlist",
                defaults: new { controller = "Shop", action = "WishList" }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "qCreate Shop",
                url: "shop/choosetemplate",
                defaults: new { controller = "Shop", action = "choosetemplate", id = UrlParameter.Optional }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "select",
                url: "shop/selecttemplate/{id}",
                defaults: new { controller = "Shop", action = "selecttemplate", id = UrlParameter.Optional }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Shop",
                url: "shop/{id}",
                defaults: new { controller = "Shop", action = "Index", id = UrlParameter.Optional }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Shop VendorCart",
                url: "shop/{id}/VendorCart",
                defaults: new { controller = "Shop", action = "VendorCart", id = UrlParameter.Optional }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Shop VendorCheckout",
                url: "shop/{id}/VendorCheckout",
                defaults: new { controller = "Shop", action = "VendorCheckout", id = UrlParameter.Optional }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Shop VendorLogin",
                url: "shop/{id}/VendorLogin",
                defaults: new { controller = "Shop", action = "VendorLogin", id = UrlParameter.Optional }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Shop VendorContact",
                url: "shop/{id}/VendorContact",
                defaults: new { controller = "Shop", action = "VendorContact", id = UrlParameter.Optional }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Shop VendorError",
                url: "shop/{id}/VendorError",
                defaults: new { controller = "Shop", action = "VendorError", id = UrlParameter.Optional }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Shop VendorProduct",
                url: "shop/{id}/VendorProduct",
                defaults: new { controller = "Shop", action = "VendorProduct", id = UrlParameter.Optional }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Shop VendorProductDetail",
                url: "shop/{id}/VendorProductDetail",
                defaults: new { controller = "Shop", action = "VendorProductDetail", id = UrlParameter.Optional }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Shop VendorBlog",
                url: "shop/{id}/VendorBlog",
                defaults: new { controller = "Shop", action = "VendorBlog", id = UrlParameter.Optional }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Shop VendorBlogSingle",
                url: "shop/{id}/VendorBlogSingle",
                defaults: new { controller = "Shop", action = "VendorBlogSingle", id = UrlParameter.Optional }
            );

            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
                name: "Shop VendorWishList",
                url: "shop/{id}/VendorWishList",
                defaults: new { controller = "Shop", action = "VendorWishList", id = UrlParameter.Optional }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
