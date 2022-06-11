using FavoriteMovies.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Globalization;

namespace FavoriteMovies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteMovieController : ControllerBase
    {
        
        private readonly DataContext _context; 

        public FavoriteMovieController(DataContext context)
        {
            _context = context;

        }

        [HttpGet]
        public async Task<ActionResult<List<FavoriteMovie>>> Get()
        {
            return Ok(await _context.FavoriteMovies.ToListAsync());
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<FavoriteMovie>> GetMovie(int id)
        {
            var movie = await _context.FavoriteMovies.FindAsync(id);
            if (movie == null)
            {
                return BadRequest("Movie not found!");
            }
            return Ok(movie);
        }
        
        [HttpPost]
        public async Task<ActionResult<List<FavoriteMovie>>> AddMovie(FavoriteMovie movie)
        {
            _context.FavoriteMovies.Add(movie);
            await _context.SaveChangesAsync();
            return Ok(await _context.FavoriteMovies.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<FavoriteMovie>>> UpdateMovie(FavoriteMovie request)
        {
            var dbmovie = await _context.FavoriteMovies.FindAsync(request.Id);
            if (dbmovie == null)
            {
                return BadRequest("Movie not found!");
            }
            dbmovie.Title = request.Title;
            dbmovie.Genre = request.Genre;
            dbmovie.Director = request.Director;
            dbmovie.ReleaseDate = request.ReleaseDate;
            
            await _context.SaveChangesAsync();

            return Ok(await _context.FavoriteMovies.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<FavoriteMovie>> DeleteMovie(int id)
        {
            var movie = await _context.FavoriteMovies.FindAsync(id);
            if (movie == null)
            {
                return BadRequest("Movie not found!");
            }
            _context.FavoriteMovies.Remove(movie);
            await _context.SaveChangesAsync();
            return Ok(await _context.FavoriteMovies.ToListAsync());
        }
    }
}
