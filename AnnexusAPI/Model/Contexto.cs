using Microsoft.EntityFrameworkCore;

namespace AnnexusAPI.Model
{
    public class Contexto : DbContext
    {
      public Contexto(DbContextOptions options) : base(options) { }

      public DbSet<Cliente> clientes { get; set; }
      public DbSet<GrupoCliente> grupoClientes { get; set; }

      protected override void OnModelCreating(ModelBuilder builder)
      {
              builder.Entity<Cliente>().HasKey(m => m.Id);
              builder.Entity<GrupoCliente>().HasKey(m => m.Id);
              base.OnModelCreating(builder);
      }
    }
}
