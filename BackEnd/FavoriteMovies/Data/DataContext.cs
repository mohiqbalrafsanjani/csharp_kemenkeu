using Microsoft.EntityFrameworkCore;

namespace FavoriteMovies.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<FavoriteMovie> FavoriteMovies { get; set; }

    }
}
