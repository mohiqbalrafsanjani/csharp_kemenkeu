using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Globalization;

namespace FavoriteMovies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteMovieController : ControllerBase
    {
        CultureInfo provider = CultureInfo.InvariantCulture;

        private static List<FavoriteMovie> movies = new List<FavoriteMovie>
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

        [HttpGet]
        public async Task<ActionResult<List<FavoriteMovie>>> Get()
        {
            return Ok(movies);
        }

        [HttpPost]
        public async Task<ActionResult<List<FavoriteMovie>>> AddMovie(FavoriteMovie movie)
        {
            movies.Add(movie);
            return Ok(movies);
        }
    }
}
