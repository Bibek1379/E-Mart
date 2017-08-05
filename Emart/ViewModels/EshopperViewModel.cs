using Emart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Emart.ViewModels
{
    public class EshopperViewModel
    {
        public Eshopper Output { get; set; }
        public Template Template { get; set; }
        public int ImageId { get; set; }
        public string ImagePath { get; set; }
        public string ProductName { get; set; }
        public int ProductId { get; set; }
    }
}