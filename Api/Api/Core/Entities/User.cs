using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Core.Entities
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required(ErrorMessage = "Name is required")]
        [StringLength(20, MinimumLength = 6, ErrorMessage = "Name must be between 6 and 20 characters")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Age is required")]
        [Range(18, 120, ErrorMessage = "Age must be between 18 and 120")]
        public int Age { get; set; }
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Password is required")]
        [StringLength(20, MinimumLength = 6, ErrorMessage = "Password must be between 6 and 20 characters")]
        public string Password { get; set; }
    }
}
