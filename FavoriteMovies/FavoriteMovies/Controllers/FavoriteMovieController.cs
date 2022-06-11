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
                },
                new FavoriteMovie
                {
                    Id = 2,
                    Title = "The Hateful Eight",
                    Genre = "Western/Drama",
                    Director = "Quentin Tarantino",
                    ReleaseDate = DateTime.Parse("2016/01/19"),
                },
            };

        [HttpGet]
        public async Task<ActionResult<List<FavoriteMovie>>> Get()
        {
            return Ok(movies);
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<FavoriteMovie>> GetMovie(int id)
        {
            var movie = movies.Find(m => m.Id == id);
            if (movie == null)
            {
                return BadRequest("Movie not found!");
            }
            return Ok(movie);
        }
        
        [HttpPost]
        public async Task<ActionResult<List<FavoriteMovie>>> AddMovie(FavoriteMovie movie)
        {
            movies.Add(movie);
            return Ok(movies);
        }

        [HttpPut]
        public async Task<ActionResult<List<FavoriteMovie>>> UpdateMovie(FavoriteMovie request)
        {
            var movie = movies.Find(m => m.Id == request.Id);
            if (movie == null)
            {
                return BadRequest("Movie not found!");
            }
            movie.Title = request.Title;
            movie.Genre = request.Genre;
            movie.Director = request.Director;
            movie.ReleaseDate = request.ReleaseDate;
            
            return Ok(movies);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<FavoriteMovie>> DeleteMovie(int id)
        {
            var movie = movies.Find(m => m.Id == id);
            if (movie == null)
            {
                return BadRequest("Movie not found!");
            }
            movies.Remove(movie);
            return Ok(movies);
        }
    }
}
