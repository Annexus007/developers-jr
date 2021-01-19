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
    public class ClientesController : ControllerBase
    {
      private readonly Contexto _contexto;

      public ClientesController(Contexto contexto)
      {
          _contexto = contexto;
      }

      [HttpGet]
      public async Task<ActionResult<IEnumerable<Cliente>>> GetClientes()
      {
        return await _contexto.clientes.ToListAsync();
      }

      [HttpGet("{id}")]
      public async Task<ActionResult<Cliente>> GetClientes(int id)
      {
        var cliente = await _contexto.clientes.FindAsync(id);

        if(cliente == null)
        {
          return NotFound();
        }
        return cliente;
      }

      [HttpPut("{id}")]
      public async Task<IActionResult> PutCliente(int id, Cliente cliente)
      {
        if(id != cliente.Id)
        {
          return BadRequest();
        }

        _contexto.Entry(cliente).State = EntityState.Modified;

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
      public async Task<ActionResult<Cliente>> PostCliente(Cliente cliente)
      {
        _contexto.clientes.Add(cliente);
        await _contexto.SaveChangesAsync();

        return CreatedAtAction(actionName: "PostCliente", routeValues: new {id = cliente.Id}, value: cliente);
      }

      [HttpDelete("{id}")]
      public async Task<ActionResult<Cliente>> DeleteCliente(int id)
      {
        var cliente = await _contexto.clientes.FindAsync(id);
        if(cliente == null)
        {
          return NotFound();
        }

        _contexto.clientes.Remove(cliente);
        await _contexto.SaveChangesAsync();

        return cliente;
      }

      private bool ClienteExists(int id)
      {

        if(_contexto.clientes.Find(id) != null)
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
