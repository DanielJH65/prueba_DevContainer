using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid UserId { get; set; }

        [MaxLength(50)]
        public required string Name { get; set; }

        [MaxLength(50)]
        public required string Lastname { get; set; }

        [MaxLength(150)]
        public required string Mail { get; set; }

        [MaxLength(100)]
        public required string Username { get; set; }

        public DateTime Creation_date { get; set; } = DateTime.Now;
    }
}