namespace FavoriteMovies
{
    public class FavoriteMovie
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Genre { get; set; } = string.Empty;
        public string Director { get; set; } = string.Empty;
        public DateTime ReleaseDate { get; set; } = DateTime.MinValue;

    }
}
