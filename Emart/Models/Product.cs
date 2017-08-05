using Emart.Models;
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
        public string ProductName { get; set; }
        public virtual Category CategoryId { get; set; }
        public virtual ICollection<ImageStore> ImageStores { get; set; }
    }
}