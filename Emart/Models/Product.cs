using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Emart.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        public int VendorId { get; set; }
        public string ProductDescription { get; set; }
        public string ProductName { get; set; }
        public string Price { get; set; }
        public int MainCategoryId { get; set; }
        public int VendorCategoryId { get; set; }
        public string ImagePath { get; set; }
    }
}