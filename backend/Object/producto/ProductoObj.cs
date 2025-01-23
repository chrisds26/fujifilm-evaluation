using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Object.producto
{
    public class ProductoObj
    {
		public int IdProducto { get; set; }
		public string? CodigoProducto { get; set; }
		public string? NombreProducto { get; set; }
        public decimal Precio { get; set; }
        public DateTime FechaALta { get; set; }
        public int IdUsuario { get; set; }
        public bool Estatus { get; set; }
        public string? TipoProducto { get; set; }
    }
}
