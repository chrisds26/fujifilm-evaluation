using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.NetworkInformation;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Object.usuario
{
    public class UsuarioObj
    {
        public int IdUsuario { get; set; }
	    public string? Nombre { get; set; }
	    public string? Apellidos { get; set; }
	    public DateTime FechaNacimiento { get; set; }
        public string? Telefono { get; set; }
	    public string? Contrasena { get; set; }
        public bool Estatus { get; set; }
        public string Token { get; set; }
    }
}
