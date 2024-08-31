using System;
using System.Collections.Generic;

namespace Dyaneshwar_Wadekar_Project.Models
{
    public  class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; } = null!;
        public string Emailid { get; set; } = null!;
        public string Password { get; set; } = null!;
        public DateTime? Birthdate { get; set; }
        public string? Address { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}
