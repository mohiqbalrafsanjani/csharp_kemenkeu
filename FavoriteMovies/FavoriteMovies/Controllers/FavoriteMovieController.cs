using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FavoriteMovies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteMovieController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<FavoriteMovie>>> Get()
        {
            var movies = new List<FavoriteMovie>
            {
                new FavoriteMovie 
                { 
                    Id = 1,
                    Title = "Mad Max: Fury Road",
                    Genre = "Action/Adventure",
                    Director = "George Miller",
                    ReleaseDate = DateTime.Parse("2015/05/14"),
                }
            };

            return Ok(movies);
        }
    }
}
