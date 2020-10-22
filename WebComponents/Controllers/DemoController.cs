using System.Collections.Generic;
using System.Web.Http;

namespace DesignSystemWebComponents.Controllers
{
    public class DemoController : ApiController
    {
        public List<Produit> Get()
        {
            var list = new List<Produit>();
            list.Add(new Produit
            {
                Id = 1,
                Nom = "Toyota"
            });

            list.Add(new Produit
            {
                Id = 2,
                Nom = "Honda"
            });

            list.Add(new Produit
            {
                Id = 3,
                Nom = "Subaru"
            });

            return list;
        }
    }

    public class Produit
    {
        public int Id { get; set; }
        public string Nom { get; set; }
    }
}