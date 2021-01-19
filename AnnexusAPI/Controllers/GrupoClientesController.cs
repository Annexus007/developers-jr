using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AnnexusAPI.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AnnexusAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GrupoClientesController : ControllerBase
    {
      private readonly Contexto _contexto;

      public GrupoClientesController(Contexto contexto)
      {
          _contexto = contexto;
      }

      [HttpGet]
      public async Task<ActionResult<IEnumerable<GrupoCliente>>> GetGrupoClientes()
      {
        return await _contexto.grupoClientes.ToListAsync();
      }

      [HttpGet("{id}")]
      public async Task<ActionResult<GrupoCliente>> GetGrupoClientes(int id)
      {
        var grupoCliente = await _contexto.grupoClientes.FindAsync(id);

        if(grupoCliente == null)
        {
          return NotFound();
        }
        return grupoCliente;
      }

      [HttpPut("{id}")]
      public async Task<IActionResult> PutGrupoCliente(int id, GrupoCliente grupoCliente)
      {
        if(id != grupoCliente.Id)
        {
          return BadRequest();
        }

        _contexto.Entry(grupoCliente).State = EntityState.Modified;

        try
        {
          await _contexto.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException ex)
        {
            throw new Exception(ex.Message);
        }
        return NoContent();
      }

      [HttpPost]
      public async Task<ActionResult<GrupoCliente>> PostGrupoCliente(GrupoCliente grupoCliente)
      {
        _contexto.grupoClientes.Add(grupoCliente);
        await _contexto.SaveChangesAsync();

        return CreatedAtAction(actionName: "GetGrupoCliente", routeValues: new {id = grupoCliente.Id}, value: grupoCliente);
      }

      [HttpDelete("{id}")]
      public async Task<ActionResult<GrupoCliente>> DeleteGrupoCliente(int id)
      {
        var grupoCliente = await _contexto.grupoClientes.FindAsync(id);
        if(grupoCliente == null)
        {
          return NotFound();
        }

        _contexto.grupoClientes.Remove(grupoCliente);
        await _contexto.SaveChangesAsync();

        return grupoCliente;
      }

      private bool GrupoClienteExists(int id)
      {

        if(_contexto.grupoClientes.Find(id) != null)
        {
          return true;
        }else
        {
          return false;
        }
        //return _contexto.clientes.Any(e => e.Id == id);
      }
    }
}
