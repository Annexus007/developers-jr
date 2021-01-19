using System;
using System.ComponentModel.DataAnnotations;

namespace AnnexusAPI.Model
{
    public class Cliente
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string Nome { get; set; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public string Cpf { get; set; }
        public string DataCadastro { get; set; }
        public GrupoCliente? grupoCliente { get; set; }
        public bool? Ativo { get; set; }
        [Required(ErrorMessage = "O campo {0} é obrigatório")]
        public long Telefone { get; set; }
    }
}
