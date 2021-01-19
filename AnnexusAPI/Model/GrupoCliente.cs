using System;
using System.ComponentModel.DataAnnotations;

namespace AnnexusAPI.Model
{
    public class GrupoCliente
    {
        [Key]
        public int Id { get; set; }

        public string Nome { get; set; }
        public bool Ativo { get; set; }
    }
}
