using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Emart.Models
{
    public class ImageStore
    {
        [Key]
        public int ImageId { get; set; }
        public string ImageName { get; set; }
        public byte[] ImageByte { get; set; }
        public string ImagePath { get; set; }
        public Nullable<bool> IsDeleted { get; set; }
        public int ProductId { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}