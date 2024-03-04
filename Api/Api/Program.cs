using Api.Core.Context;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddRouting(routing => routing.LowercaseUrls = true);

//DB
builder.Services.AddDbContext<ApplicationDbContext>(o =>
o.UseSqlServer(builder.Configuration.GetConnectionString("conexion")));

//Cors
builder.Services.AddCors(p => p.AddDefaultPolicy(build =>
{
    build.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));









var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors();

app.Run();
