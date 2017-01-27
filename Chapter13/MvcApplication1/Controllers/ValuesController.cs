using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SpellChecker;

namespace MvcApplication1.Controllers
{
    public class SearchContext
    {
        public string Lookup { get; set; }
        public int Count { get; set; }
    }
    public class ValuesController : ApiController
    {
        ISpellCheckerModel _spellChecker = NorvigSpellCheckerModel.Instance;
        // GET api/values
        public IEnumerable<string> Get([FromUri] SearchContext context)
        {
            return _spellChecker.SpellCheck(context.Lookup, context.Count);
        }
    }
}