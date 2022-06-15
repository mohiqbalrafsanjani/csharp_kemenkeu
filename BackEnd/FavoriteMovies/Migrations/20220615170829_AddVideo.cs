using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FavoriteMovies.Migrations
{
    public partial class AddVideo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Video",
                table: "FavoriteMovies",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Video",
                table: "FavoriteMovies");
        }
    }
}
