using Emart.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Emart.Models
{
    public class Eshopper
    {
        [Key]
        public int Id { get; set; }
        public string slider1_Text1 { get; set; }
        public string slider1_Text1_color { get; set; }
        public string slider1_Text2 { get; set; }
        public string slider1_Text2_color { get; set; }
        public string slider1_Text3 { get; set; }
        public string slider1_Text3_color { get; set; }
        public string slider2_Text1 { get; set; }
        public string slider2_Text1_color { get; set; }
        public string slider2_Text2 { get; set; }
        public string slider2_Text2_color { get; set; }
        public string slider2_Text3 { get; set; }
        public string slider2_Text3_color { get; set; }
        public string slider3_Text1 { get; set; }
        public string slider3_Text1_color { get; set; }
        public string slider3_Text2 { get; set; }
        public string slider3_Text2_color { get; set; }
        public string slider3_Text3 { get; set; }
        public string slider3_Text3_color { get; set; }
        public string Text1 { get; set; }
        public string Text1_color { get; set; }
        public string Text2 { get; set; }
        public string Text2_color { get; set; }
        public string Text3 { get; set; }
        public string Text3_color { get; set; }
        public string dpath1 { get; set; }
        public string dpath2 { get; set; }
        public string dpath3 { get; set; }
        public int MobileNumber { get; set; }
        public string Email { get; set; }
        public string FacebookLink { get; set; }
        public string TwitterLink { get; set; }
        public string InstagramLink { get; set; }
        public string GooglelusLink { get; set; }
        public string Header { get; set; }
        public string Title { get; set; }
        public string Footer { get; set; }
        public int VendorId { get; set; }
        
    }
}