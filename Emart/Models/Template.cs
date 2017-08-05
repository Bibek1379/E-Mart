using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Emart.Models
{
    public class Template
    {
        public int TemplateId { get; set; }
        public string TemplateName { get; set; }
        public virtual ICollection<Vendor> Vendor { get; set; }
    }

}