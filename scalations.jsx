const forms = [
    {
        form: "Operaciones",
        teamsAuthorized: [
            "61a28b7f53f220a1f3a86aed"
        ]
    },
    {
        form: "Supply",
        teamsAuthorized: [
            "61a28b7f53f220a1f3a86aed"
        ]
    },
    {
        form: "Control Tower",
        teamsAuthorized: [
            "61a28b7f53f220a1f3a86aed"
        ]
    },
    {
        form: "Financiero",
        teamsAuthorized: [
            "61a28b7f53f220a1f3a86aed"
        ]
    },
    {
        form: "Pago Aliados",
        teamsAuthorized: [
            "61a28b7f53f220a1f3a86aed"
        ]
    },
    {
        form: "Interno CS",
        teamsAuthorized: [
            "61a28b7f53f220a1f3a86aed"
        ]
    },
    {
        form: "Darkstore",
        teamsAuthorized: [
            "61a28b7f53f220a1f3a86aed"
        ]
    },
    {
        form: "Customer Service",
        teamsAuthorized: [
            "61a28b7f53f220a1f3a86aed"
        ]
    },
    {
        form: "Control Tower",
        teamsAuthorized: [
            "6380c9685928e4cad003b429"
        ]
    },
    {
        form: "Operaciones MP",
        teamsAuthorized: [
            "66e041ffca4bc54724b39f2f"
        ]
    },
    {
        form: "Financiero MP",
        teamsAuthorized: [
            "66e041ffca4bc54724b39f2f"
        ]
    }
];

const styles = {
    form: {
        background: '#F9F9F9'
    },
    formTitle: {
        fontWeight: '500px',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        backgroundColor: '#e21325',
        margin: '5px 0px 5px'
    },
    formSubtitle: {
        margin: '5px 5px',
        color: 'black',
        width: '95%'
    },
    inputDate: {
        width: '95%',
        margin: '0px 5px 10px'
    },
    inputText: {
        width: '95%',
        margin: '0 5px 10px'
    },
    buttonSubmit: {
        height: '25px',
        padding: '0px 0px',
        cursor: 'pointer',
        width: '100%',
        background: '#210972',
        color: 'white',
        margin: '5px 0px'
    },
    attachment: {
        border: "solid 1px black",
        margin: "5px 5px"
    },
    p: {
        color: '#00000'
    }

};
const ReusableSelectMarcaPais = ({ label, options, ...props }) => { return (<div><label style={styles.formSubtitle}>{label}</label><select {...props}>{options.map((option, index) => (<option key={index} value={option.value}>{option.label}</option>))}</select></div>); };
const ReusableCountry = ({ label, options, ...props }) => { return (<div><label style={styles.formSubtitle}>{label}</label><select {...props}>{options.map((option, index) => (<option key={index} value={option.value}>{option.label}</option>))}</select></div>); };
const optionsCountries = [{ value: '', label: '-' }, { value: 'ar', label: 'Argentina' }, { value: 'cl', label: 'Chile' }, { value: 'co', label: 'Colombia' }, { value: 'mx', label: 'México' }];
const optionsMarca = [{ value: '-', label: '-' }, { value: '2P Seguridad', label: '2P Seguridad' }, { value: '4Her', label: '4Her' }, { value: 'Abbioshock', label: 'Abbioshock' }, { value: 'ABCLEAN', label: 'ABCLEAN' }, { value: 'acento', label: 'acento' }, { value: 'aconmateriales', label: 'aconmateriales' }, { value: 'Aconpiexpress S.A.S', label: 'Aconpiexpress S.A.S' }, { value: 'Adidas', label: 'Adidas' }, { value: 'Adonay Distribution', label: 'Adonay Distribution' }, { value: 'Advent International', label: 'Advent International' }, { value: 'AEH MALL', label: 'AEH MALL' }, { value: 'Afaygo', label: 'Afaygo' }, { value: 'Agarimo', label: 'Agarimo' }, { value: 'Agentos', label: 'Agentos' }, { value: 'Agua Bendita', label: 'Agua Bendita' },
{ value: 'Agw', label: 'Agw' }, { value: 'Aires de Campo', label: 'Aires de Campo' }, { value: 'Aitana', label: 'Aitana' }, { value: 'Ajover Darnel', label: 'Ajover Darnel' }, { value: 'alameda', label: 'alameda' }, { value: 'Alau Tecnologia SAU', label: 'Alau Tecnologia SAU' }, { value: 'Alcasatu', label: 'Alcasatu' }, { value: 'ALCLICK.STORE', label: 'ALCLICK.STORE' }, { value: 'alcostocalzado.com', label: 'alcostocalzado.com' }, { value: 'Aliado', label: 'Aliado' }, { value: 'Alianza Frubana Express', label: 'Alianza Frubana Express' }, { value: 'Alkosto av 68', label: 'Alkosto av 68' }, { value: 'AllGreen Mascotas', label: 'AllGreen Mascotas' }, { value: 'Alma store cake tools and home', label: 'Alma store cake tools and home' }, { value: 'Almacenes Exito SA', label: 'Almacenes Exito SA' }, { value: 'ALMADEMUSICOS', label: 'ALMADEMUSICOS' }, { value: 'Almagro Express', label: 'Almagro Express' }, { value: 'Alquimia', label: 'Alquimia' }, { value: 'ALTCELSAPI', label: 'ALTCELSAPI' }, { value: 'Altipal SAS', label: 'Altipal SAS' }, { value: 'alucinne', label: 'alucinne' },
{ value: 'Amalfi - FAMIGLIA UNITA', label: 'Amalfi - FAMIGLIA UNITA' }, { value: 'Ambrosia Toy Store', label: 'Ambrosia Toy Store' }, { value: 'AMEN BY NAH', label: 'AMEN BY NAH' }, { value: 'American Leader', label: 'American Leader' }, { value: 'AMY', label: 'AMY' }, { value: 'Anidando Deco', label: 'Anidando Deco' }, { value: 'Animal Style', label: 'Animal Style' }, { value: 'another', label: 'another' }, { value: 'Anthony Rojas', label: 'Anthony Rojas' }, { value: 'AOX Nutrition', label: 'AOX Nutrition' }, { value: 'Aphex Gear', label: 'Aphex Gear' }, { value: 'APLIN', label: 'APLIN' }, { value: 'Apparel.Studio', label: 'Apparel.Studio' }, { value: 'Aquistar', label: 'Aquistar' }, { value: 'Arcos S.A.S', label: 'Arcos S.A.S' }, { value: 'ARG Autopartes', label: 'ARG Autopartes' }, { value: 'ARREMMASOLUTIONS', label: 'ARREMMASOLUTIONS' }, { value: 'ATRAER', label: 'ATRAER' }, { value: 'Atti Funda', label: 'Atti Funda' }, { value: 'Audio Tienda', label: 'Audio Tienda' }, { value: 'audiotiendaco', label: 'audiotiendaco' }, { value: 'Automatizate', label: 'Automatizate' }, { value: 'AVANTECH SYSTEM SAS', label: 'AVANTECH SYSTEM SAS' },
{ value: 'AvofemSkincare', label: 'AvofemSkincare' }, { value: 'Axito Mundial72', label: 'Axito Mundial72' }, { value: 'Baby shop', label: 'Baby shop' }, { value: 'BabyPlanet', label: 'BabyPlanet' }, { value: 'Bac Digital', label: 'Bac Digital' }, { value: 'Bajate', label: 'Bajate' }, { value: 'Balagardos', label: 'Balagardos' }, { value: 'balia.cl', label: 'balia.cl' }, { value: 'Bamboleira', label: 'Bamboleira' }, { value: 'Bamboo Music', label: 'Bamboo Music' }, { value: 'Banana Split', label: 'Banana Split' }, { value: 'BancheroSanitarios', label: 'BancheroSanitarios' }, { value: 'BANIOFERTA', label: 'BANIOFERTA' }, { value: 'BARK_ARGENTINA', label: 'BARK_ARGENTINA' }, { value: 'barra de rubor', label: 'barra de rubor' }, { value: 'BARRAZACONSTANZA92', label: 'BARRAZACONSTANZA92' }, { value: 'BARUGEL - BANIOFERTA', label: 'BARUGEL - BANIOFERTA' }, { value: 'BAsariworld', label: 'BAsariworld' }, { value: 'Bat', label: 'Bat' }, { value: 'Baum Brothers', label: 'Baum Brothers' }, { value: 'BCB SAS', label: 'BCB SAS' }, { value: 'BEATRIZ ATTOLINI', label: 'BEATRIZ ATTOLINI' }, { value: 'Beauty Bloom', label: 'Beauty Bloom' }, { value: 'beauty.store', label: 'beauty.store' },
{ value: 'Bella Piel', label: 'Bella Piel' }, { value: 'BELLEZA AL DíA', label: 'BELLEZA AL DíA' }, { value: 'Beltramind', label: 'Beltramind' }, { value: 'BeROOTS', label: 'BeROOTS' }, { value: 'Best Store CDMX', label: 'Best Store CDMX' }, { value: 'Beurer Flex', label: 'Beurer Flex' }, { value: 'beyonds', label: 'beyonds' }, { value: 'Bicimex', label: 'Bicimex' }, { value: 'Bierhaus Brewing Co.', label: 'Bierhaus Brewing Co.' }, { value: 'Big Boss', label: 'Big Boss' }, { value: 'BIGSALEONLINE', label: 'BIGSALEONLINE' }, { value: 'Biobell Natural Express Bogota', label: 'Biobell Natural Express Bogota' }, { value: 'Bioflux', label: 'Bioflux' }, { value: 'BIONUTRITION', label: 'BIONUTRITION' }, { value: 'Blackwood México', label: 'Blackwood México' }, { value: 'Blakome', label: 'Blakome' }, { value: 'BLIND UNICENTRO', label: 'BLIND UNICENTRO' }, { value: 'Bluelander', label: 'Bluelander' }, { value: 'Blume', label: 'Blume' }, { value: 'Blush Bar', label: 'Blush Bar' }, { value: 'Bocados tequeños', label: 'Bocados tequeños' }, { value: 'Bodega Araujo', label: 'Bodega Araujo' }, { value: 'BODEGO S.A.', label: 'BODEGO S.A.' }, { value: 'Bold', label: 'Bold' },
{ value: 'BON BONITE', label: 'BON BONITE' }, { value: 'Boris Plazas', label: 'Boris Plazas' }, { value: 'Bosi', label: 'Bosi' }, { value: 'Boticario', label: 'Boticario' }, { value: 'BoutiquedeDecoración', label: 'BoutiquedeDecoración' }, { value: 'branchos', label: 'branchos' }, { value: 'branddu', label: 'branddu' }, { value: 'BRUNA', label: 'BRUNA' }, { value: 'BSF Seeds', label: 'BSF Seeds' }, { value: 'Buen Camino Bariloche Flex', label: 'Buen Camino Bariloche Flex' }, { value: 'Buenas Maltas', label: 'Buenas Maltas' }, { value: 'Builder Brands', label: 'Builder Brands' }, { value: 'BULL MARKET', label: 'BULL MARKET' }, { value: 'Buro de Juegos', label: 'Buro de Juegos' }, { value: 'B-wise', label: 'B-wise' }, { value: 'BYR BUY', label: 'BYR BUY' }, { value: 'BZS TIENDA DE BEBIDAS', label: 'BZS TIENDA DE BEBIDAS' }, { value: 'Caballeros del Rosario', label: 'Caballeros del Rosario' }, { value: 'Cada cosa en su lugar', label: 'Cada cosa en su lugar' }, { value: 'Cadabra & Books', label: 'Cadabra & Books' }, { value: 'CAENPAVA', label: 'CAENPAVA' }, { value: 'Café Robanna', label: 'Café Robanna' }, { value: 'Cajero', label: 'Cajero' }, { value: 'CALZADOSNEWCHIVAS', label: 'CALZADOSNEWCHIVAS' },
{ value: 'CamRomTienda', label: 'CamRomTienda' }, { value: 'Canterano SpA', label: 'Canterano SpA' }, { value: 'CANTOBENI', label: 'CANTOBENI' }, { value: 'Carnaval', label: 'Carnaval' }, { value: 'cartelitos.lindos', label: 'cartelitos.lindos' }, { value: 'Carvajal', label: 'Carvajal' }, { value: 'Casa Bayur', label: 'Casa Bayur' }, { value: 'CASA.SCHETTINI', label: 'CASA.SCHETTINI' }, { value: 'Casa-belgrano', label: 'Casa-belgrano' }, { value: 'Casaliving', label: 'Casaliving' }, { value: 'CasaLuker', label: 'CasaLuker' }, { value: 'Case Company', label: 'Case Company' }, { value: 'Castor', label: 'Castor' }, { value: 'Castorapp.Full', label: 'Castorapp.Full' }, { value: 'CEDI LEONISA', label: 'CEDI LEONISA' }, { value: 'Centro Mac CC Plaza Claro Local 1-44', label: 'Centro Mac CC Plaza Claro Local 1-44' }, { value: 'CentroPet', label: 'CentroPet' }, { value: 'CEO DINES', label: 'CEO DINES' }, { value: 'Cepillos industriales triunfo SA', label: 'Cepillos industriales triunfo SA' }, { value: 'Cera Optima', label: 'Cera Optima' }, { value: 'CERCINALO SAS', label: 'CERCINALO SAS' }, { value: 'Cetima SA', label: 'Cetima SA' }, { value: 'Chelarte', label: 'Chelarte' },
{ value: 'Chile Tendencia', label: 'Chile Tendencia' }, { value: 'CHILI BEANS', label: 'CHILI BEANS' }, { value: 'Chiper', label: 'Chiper' }, { value: 'Chivigon Market', label: 'Chivigon Market' }, { value: 'Circular Pet Shop', label: 'Circular Pet Shop' }, { value: 'Ciudad Cotillon', label: 'Ciudad Cotillon' }, { value: 'ClaClaFULL', label: 'ClaClaFULL' }, { value: 'Clara', label: 'Clara' }, { value: 'Claro', label: 'Claro' }, { value: 'Claspack', label: 'Claspack' }, { value: 'Claudia Bermíºdez', label: 'Claudia Bermíºdez' }, { value: 'company', label: 'company' }, { value: 'CLIENTE DE PRUEBAS', label: 'CLIENTE DE PRUEBAS' }, { value: 'CMEcotecnologí­a', label: 'CMEcotecnologí­a' }, { value: 'coffee break', label: 'coffee break' }, { value: 'Colcapital', label: 'Colcapital' }, { value: 'COMEDIFERENTE', label: 'COMEDIFERENTE' }, { value: 'Comedor Santa Maria AC', label: 'Comedor Santa Maria AC' }, { value: 'Comercial Adabra', label: 'Comercial Adabra' }, { value: 'comercialcim', label: 'comercialcim' }, { value: 'ComercialFenixSpa', label: 'ComercialFenixSpa' }, { value: 'COMERCIALFUNSMART', label: 'COMERCIALFUNSMART' }, { value: 'comercialzadora kelly', label: 'comercialzadora kelly' },
{ value: 'Commons', label: 'Commons' }, { value: 'compuvisiontechnology', label: 'compuvisiontechnology' }, { value: 'CONECTY', label: 'CONECTY' }, { value: 'CONTINENTE', label: 'CONTINENTE' }, { value: 'CORDOBA ILUMINACION', label: 'CORDOBA ILUMINACION' }, { value: 'corona Grival', label: 'corona Grival' }, { value: 'Corporativo TODO-MIO', label: 'Corporativo TODO-MIO' }, { value: 'Cosmetika', label: 'Cosmetika' }, { value: 'CPT oficina', label: 'CPT oficina' }, { value: 'CROMANTIC LA FELICIDAD', label: 'CROMANTIC LA FELICIDAD' }, { value: 'CROMATIC GALERIAS', label: 'CROMATIC GALERIAS' }, { value: 'Cuchilleria El Trentino', label: 'Cuchilleria El Trentino' }, { value: 'Cueros Velez', label: 'Cueros Velez' }, { value: 'Curly Lovers', label: 'Curly Lovers' }, { value: 'Cuttiecup', label: 'Cuttiecup' }, { value: 'Cyneticz', label: 'Cyneticz' }, { value: 'Daana Joyeria', label: 'Daana Joyeria' }, { value: 'Dadida Cosmetics', label: 'Dadida Cosmetics' }, { value: 'darababy', label: 'darababy' }, { value: 'Darnel', label: 'Darnel' }, { value: 'Datecsa', label: 'Datecsa' }, { value: 'Dazbog Store', label: 'Dazbog Store' }, { value: 'De a Dos', label: 'De a Dos' },
{ value: 'Decathlon Ciudades Same Day', label: 'Decathlon Ciudades Same Day' }, { value: 'DECORALIUM', label: 'DECORALIUM' }, { value: 'DEKEN', label: 'DEKEN' }, { value: 'Del Alba', label: 'Del Alba' }, { value: 'Demo company', label: 'Demo company' }, { value: 'DEMOIT - QA', label: 'DEMOIT - QA' }, { value: 'DEMOITENVIOS', label: 'DEMOITENVIOS' }, { value: 'Denise Hakim', label: 'Denise Hakim' }, { value: 'DenzarNet', label: 'DenzarNet' }, { value: 'DeportesGalaxia', label: 'DeportesGalaxia' }, { value: 'Dermyf', label: 'Dermyf' }, { value: 'Destinos Express', label: 'Destinos Express' }, { value: 'Diésel viva barranquilla express', label: 'Diésel viva barranquilla express' }, { value: 'Diamond Flex', label: 'Diamond Flex' }, { value: 'Diamond.Pet.CDMX', label: 'Diamond.Pet.CDMX' }, { value: 'Dico Store', label: 'Dico Store' }, { value: 'DICOMSE', label: 'DICOMSE' }, { value: 'Diesel', label: 'Diesel' }, { value: 'Dieteticacallao', label: 'Dieteticacallao' }, { value: 'DISEñOS EPOXICOS', label: 'DISEñOS EPOXICOS' }, { value: 'disel', label: 'disel' }, { value: 'Distribeaute', label: 'Distribeaute' }, { value: 'Distribuidora Imak', label: 'Distribuidora Imak' },
{ value: 'distrielectro', label: 'distrielectro' }, { value: 'Divinasalud', label: 'Divinasalud' }, { value: 'Divino Mantra MercadoFlex', label: 'Divino Mantra MercadoFlex' }, { value: 'Doggy Cat', label: 'Doggy Cat' }, { value: 'DOGO SAS', label: 'DOGO SAS' }, { value: 'Domestic Bonsai', label: 'Domestic Bonsai' }, { value: 'Domosis Mercadoflex', label: 'Domosis Mercadoflex' }, { value: 'Duck Tools', label: 'Duck Tools' }, { value: 'DX Electronica', label: 'DX Electronica' }, { value: 'dygsport', label: 'dygsport' }, { value: 'Ecig Argentina', label: 'Ecig Argentina' }, { value: 'ECOMMERCE', label: 'ECOMMERCE' }, { value: 'Ecotu', label: 'Ecotu' }, { value: 'eDarkstore', label: 'eDarkstore' }, { value: 'EDI LEONISA', label: 'EDI LEONISA' }, { value: 'EDM', label: 'EDM' }, { value: 'El Balcón', label: 'El Balcón' }, { value: 'Eléctricos del Valle', label: 'Eléctricos del Valle' }, { value: 'ElBauldeJave', label: 'ElBauldeJave' }, { value: 'ELBISTURI', label: 'ELBISTURI' }, { value: 'Electricos del Valle', label: 'Electricos del Valle' }, { value: 'Electro y Hogar', label: 'Electro y Hogar' }, { value: 'Electroship', label: 'Electroship' }, { value: 'ELECTROSHIP2014', label: 'ELECTROSHIP2014' },
{ value: 'ELECTROYHOGAR', label: 'ELECTROYHOGAR' }, { value: 'Elite Importaciones S.A.', label: 'Elite Importaciones S.A.' }, { value: 'elmos', label: 'elmos' }, { value: 'Elpuntolicores', label: 'Elpuntolicores' }, { value: 'elsociocom', label: 'elsociocom' }, { value: 'ElTioVende.com', label: 'ElTioVende.com' }, { value: 'EMANA', label: 'EMANA' }, { value: 'e-Mentors', label: 'e-Mentors' }, { value: 'empirewatches', label: 'empirewatches' }, { value: 'Empowermind', label: 'Empowermind' }, { value: 'EMPRESA DE TRANSPORTE CHILENA', label: 'EMPRESA DE TRANSPORTE CHILENA' }, { value: 'Ensel', label: 'Ensel' }, { value: 'Entelgy Colombia', label: 'Entelgy Colombia' }, { value: 'Envia colvanes', label: 'Envia colvanes' }, { value: 'EPICA', label: 'EPICA' }, { value: 'EQUIPACK PERU', label: 'EQUIPACK PERU' }, { value: 'EQUIPO CLARA', label: 'EQUIPO CLARA' }, { value: 'Equipo.JAVAZ', label: 'Equipo.JAVAZ' }, { value: 'EQUIPOS MEDICOS EL BISTURI', label: 'EQUIPOS MEDICOS EL BISTURI' }, { value: 'Ergogenic center', label: 'Ergogenic center' }, { value: 'Ergogenics', label: 'Ergogenics' }, { value: 'Estambres Garssiny', label: 'Estambres Garssiny' }, { value: 'estudio de moda', label: 'estudio de moda' },
{ value: 'eudaplan', label: 'eudaplan' }, { value: 'Eudaplen', label: 'Eudaplen' }, { value: 'Eufforia MercadoFlex', label: 'Eufforia MercadoFlex' }, { value: 'eufforia.co@gmail.com', label: 'eufforia.co@gmail.com' }, { value: 'EUNICE', label: 'EUNICE' }, { value: 'EUPHORIA COSMETICS', label: 'EUPHORIA COSMETICS' }, { value: 'Evini', label: 'Evini' }, { value: 'Exane', label: 'Exane' }, { value: 'EXITO', label: 'EXITO' }, { value: 'EXPRESS', label: 'EXPRESS' }, { value: 'Exting Norte', label: 'Exting Norte' }, { value: 'Ezzenshop', label: 'Ezzenshop' }, { value: 'Fabio Corredor', label: 'Fabio Corredor' }, { value: 'Fabrica de Jabones El Exito Mercado Libre', label: 'Fabrica de Jabones El Exito Mercado Libre' }, { value: 'Fairybae', label: 'Fairybae' }, { value: 'falabella', label: 'falabella' }, { value: 'FAMIGLIA UNITA', label: 'FAMIGLIA UNITA' }, { value: 'Fantasí­a Electronica', label: 'Fantasí­a Electronica' }, { value: 'Fantasia Electronica', label: 'Fantasia Electronica' }, { value: 'farenjewelery', label: 'farenjewelery' }, { value: 'Farmacia Abriatta', label: 'Farmacia Abriatta' }, { value: 'Farmacias Especializadas.', label: 'Farmacias Especializadas.' },
{ value: 'Farmalivery', label: 'Farmalivery' }, { value: 'Favik', label: 'Favik' }, { value: 'Felicity', label: 'Felicity' }, { value: 'Felipe Carrasco', label: 'Felipe Carrasco' }, { value: 'felix biedma', label: 'felix biedma' }, { value: 'Fercol Lubricantes', label: 'Fercol Lubricantes' }, { value: 'Finesa', label: 'Finesa' }, { value: 'Firmas Asociadas SAS', label: 'Firmas Asociadas SAS' }, { value: 'FLAMINGO', label: 'FLAMINGO' }, { value: 'For_Me Mexico', label: 'For_Me Mexico' }, { value: 'For_Me', label: 'For_Me' }, { value: 'FORTIER', label: 'FORTIER' }, { value: 'FORTUNATO HELADOS ARTESANALES MORENO', label: 'FORTUNATO HELADOS ARTESANALES MORENO' }, { value: 'Freeport', label: 'Freeport' }, { value: 'Fronteras Yerba Mate', label: 'Fronteras Yerba Mate' }, { value: 'Fulfillment services', label: 'Fulfillment services' }, { value: 'Full Hogar', label: 'Full Hogar' }, { value: 'Fullbai', label: 'Fullbai' }, { value: 'FundaciónDKMS', label: 'FundaciónDKMS' }, { value: 'GadgetsMX', label: 'GadgetsMX' }, { value: 'GAMALIEL', label: 'GAMALIEL' }, { value: 'Gaudi Bebe', label: 'Gaudi Bebe' }, { value: 'Gava Design B2C', label: 'Gava Design B2C' },
{ value: 'Genialshop S.A de C.V', label: 'Genialshop S.A de C.V' }, { value: 'GLOBAL MV SPA', label: 'GLOBAL MV SPA' }, { value: 'globalkerry.cl', label: 'globalkerry.cl' }, { value: 'Glook Sorpresas', label: 'Glook Sorpresas' }, { value: 'Glu Cloud', label: 'Glu Cloud' }, { value: 'Golden Port Spa', label: 'Golden Port Spa' }, { value: 'Golingo', label: 'Golingo' }, { value: 'gongo', label: 'gongo' }, { value: 'gongoshop', label: 'gongoshop' }, { value: 'GOOMS COLOMBIA', label: 'GOOMS COLOMBIA' }, { value: 'GOURMET FAMILY', label: 'GOURMET FAMILY' }, { value: 'Gran Travel Agencia De Viajes', label: 'Gran Travel Agencia De Viajes' }, { value: 'GRANCOLOR', label: 'GRANCOLOR' }, { value: 'Green Pets', label: 'Green Pets' }, { value: 'Greendog', label: 'Greendog' }, { value: 'GremioMicroelectronica', label: 'GremioMicroelectronica' }, { value: 'GREYMUSIC', label: 'GREYMUSIC' }, { value: 'Grisino', label: 'Grisino' }, { value: 'Grupo Boticario', label: 'Grupo Boticario' }, { value: 'Guillermo cuevas', label: 'Guillermo cuevas' }, { value: 'GVC Cosmetics', label: 'GVC Cosmetics' }, { value: 'Gymandswim', label: 'Gymandswim' }, { value: 'Happy Eureka', label: 'Happy Eureka' },
{ value: 'happyflex', label: 'happyflex' }, { value: 'HASTA VOLVERNOS A ENCONTRAR', label: 'HASTA VOLVERNOS A ENCONTRAR' }, { value: 'Hauss', label: 'Hauss' }, { value: 'Health Company', label: 'Health Company' }, { value: 'Hector Raul Ardila', label: 'Hector Raul Ardila' }, { value: 'Heigel', label: 'Heigel' }, { value: 'Hepa Tecnologia', label: 'Hepa Tecnologia' }, { value: 'Hermes Pinzon', label: 'Hermes Pinzon' }, { value: 'HERRAMIENTAS Y CERAS', label: 'HERRAMIENTAS Y CERAS' }, { value: 'High Impact Sport Wear', label: 'High Impact Sport Wear' }, { value: 'Home Delivery', label: 'Home Delivery' }, { value: 'Homebrand', label: 'Homebrand' }, { value: 'HORA CERO', label: 'HORA CERO' }, { value: 'HotDogz PE', label: 'HotDogz PE' }, { value: 'HubSpot', label: 'HubSpot' }, { value: 'I LOVE SHAPE', label: 'I LOVE SHAPE' }, { value: 'Ibeamstorecl', label: 'Ibeamstorecl' }, { value: 'Idearte Mayorista', label: 'Idearte Mayorista' }, { value: 'IDEAS ANLI', label: 'IDEAS ANLI' }, { value: 'IFashion', label: 'IFashion' }, { value: 'igazzia_test', label: 'igazzia_test' }, { value: 'IGComics', label: 'IGComics' }, { value: 'Iluminata', label: 'Iluminata' }, { value: 'IMPERO JEWELRY', label: 'IMPERO JEWELRY' },
{ value: 'importacionessas1', label: 'importacionessas1' }, { value: 'imt importaciones', label: 'imt importaciones' }, { value: 'INCOM FLEX', label: 'INCOM FLEX' }, { value: 'INDAH', label: 'INDAH' }, { value: 'INDUTECNICA', label: 'INDUTECNICA' }, { value: 'INOVACAPS', label: 'INOVACAPS' }, { value: 'Instace Latam Sameday Bogota', label: 'Instace Latam Sameday Bogota' }, { value: 'Instance Latam', label: 'Instance Latam' }, { value: 'Instancia Latam Sameday Bogotí¡', label: 'Instancia Latam Sameday Bogotí¡' }, { value: 'Interesado en servicio', label: 'Interesado en servicio' }, { value: 'Intimate elegance', label: 'Intimate elegance' }, { value: 'Inversas.cli', label: 'Inversas.cli' }, { value: 'Inversiones Krona', label: 'Inversiones Krona' }, { value: 'Investment MLD', label: 'Investment MLD' }, { value: 'IPG.mediabrands', label: 'IPG.mediabrands' }, { value: 'Jaguarshoes', label: 'Jaguarshoes' }, { value: 'Jands Joyeria', label: 'Jands Joyeria' }, { value: 'JaqueMate', label: 'JaqueMate' }, { value: 'JAVAZTEAMSHOP', label: 'JAVAZTEAMSHOP' }, { value: 'Javier Bartaburu', label: 'Javier Bartaburu' }, { value: 'Jeffry Del Real Marquez', label: 'Jeffry Del Real Marquez' }, { value: 'Jeunesse  Argentina', label: 'Jeunesse  Argentina' },
{ value: 'JMEQUIPOTACTICO', label: 'JMEQUIPOTACTICO' }, { value: 'Jnds Distribucion.', label: 'Jnds Distribucion.' }, { value: 'jobandtalent', label: 'jobandtalent' }, { value: 'Joyeria M De Leon', label: 'Joyeria M De Leon' }, { value: 'jsricop', label: 'jsricop' }, { value: 'Jugueterias Gulliver', label: 'Jugueterias Gulliver' }, { value: 'JUPIX', label: 'JUPIX' }, { value: 'Kahuna Balance Boards', label: 'Kahuna Balance Boards' }, { value: 'KALEIDOSCOPIOMX', label: 'KALEIDOSCOPIOMX' }, { value: 'Keep Beauty', label: 'Keep Beauty' }, { value: 'Khies Andino', label: 'Khies Andino' }, { value: 'Khiron', label: 'Khiron' }, { value: 'Kiddy', label: 'Kiddy' }, { value: 'Kiehls', label: 'Kiehls' }, { value: 'Kiehls Andino', label: 'Kiehls Andino' }, { value: 'KIMURA', label: 'KIMURA' }, { value: 'kioshi', label: 'kioshi' }, { value: 'KIOSKO', label: 'KIOSKO' }, { value: 'kipling', label: 'kipling' }, { value: 'Kiss Internacional', label: 'Kiss Internacional' }, { value: 'Klozer', label: 'Klozer' }, { value: 'KN Adidas Colombia', label: 'KN Adidas Colombia' }, { value: 'KOREKUSHON', label: 'KOREKUSHON' }, { value: 'KRiverclothing', label: 'KRiverclothing' }, { value: 'KronoTime', label: 'KronoTime' },
{ value: 'kufo', label: 'kufo' }, { value: 'La Perfumm', label: 'La Perfumm' }, { value: 'la.rufinaclothes', label: 'la.rufinaclothes' }, { value: 'Laboratorios ENA', label: 'Laboratorios ENA' }, { value: 'Laila Smiches', label: 'Laila Smiches' }, { value: 'Laila.smiches', label: 'Laila.smiches' }, { value: 'Land Plast', label: 'Land Plast' }, { value: 'LaOctavaMezcaleria', label: 'LaOctavaMezcaleria' }, { value: 'lape', label: 'lape' }, { value: 'Laperfumm', label: 'Laperfumm' }, { value: 'las jacintas', label: 'las jacintas' }, { value: 'lasbuenasideas', label: 'lasbuenasideas' }, { value: 'Laskin', label: 'Laskin' }, { value: 'Latam', label: 'Latam' }, { value: 'Latamly', label: 'Latamly' }, { value: 'LATIENDADERAFAEL', label: 'LATIENDADERAFAEL' }, { value: 'Latinco', label: 'Latinco' }, { value: 'Laura Gomez', label: 'Laura Gomez' }, { value: 'LE LUNAU', label: 'LE LUNAU' }, { value: 'LEDDENT LTDA', label: 'LEDDENT LTDA' }, { value: 'Legado Cacao', label: 'Legado Cacao' }, { value: 'Leggenda - Joyas y Accesorios', label: 'Leggenda - Joyas y Accesorios' }, { value: 'Lego', label: 'Lego' }, { value: 'Lentes Plus', label: 'Lentes Plus' }, { value: 'Leonisa', label: 'Leonisa' },
{ value: 'Letotoncasa', label: 'Letotoncasa' }, { value: 'levys bazar', label: 'levys bazar' }, { value: 'Librerí¡ Jabes Chile', label: 'Librerí¡ Jabes Chile' }, { value: 'LIBRERIA AZ', label: 'LIBRERIA AZ' }, { value: 'LibreriadelSotano', label: 'LibreriadelSotano' }, { value: 'liliana sanchez', label: 'liliana sanchez' }, { value: 'Linea Directa', label: 'Linea Directa' }, { value: 'Lineas MX', label: 'Lineas MX' }, { value: 'LINIO', label: 'LINIO' }, { value: 'Little Paradise', label: 'Little Paradise' }, { value: 'Lizza', label: 'Lizza' }, { value: 'LMM1- MX', label: 'LMM1- MX' }, { value: 'Loaks', label: 'Loaks' }, { value: 'Local', label: 'Local' }, { value: 'Logicluster', label: 'Logicluster' }, { value: 'Logistica POP Colombia S.A.S', label: 'Logistica POP Colombia S.A.S' }, { value: 'app', label: 'app' }, { value: 'Logyt.Transformation', label: 'Logyt.Transformation' }, { value: 'Loog Guitars SRL', label: 'Loog Guitars SRL' }, { value: 'Look Sport', label: 'Look Sport' }, { value: 'Looks Sport', label: 'Looks Sport' }, { value: 'Loro', label: 'Loro' }, { value: 'Loto Arkadia cosmetika sas', label: 'Loto Arkadia cosmetika sas' },
{ value: 'Loure Skincare', label: 'Loure Skincare' }, { value: 'Lu Cosmetics', label: 'Lu Cosmetics' }, { value: 'LUBRICENTRO SAN PLACIDO SRL', label: 'LUBRICENTRO SAN PLACIDO SRL' }, { value: 'Lumen', label: 'Lumen' }, { value: 'Lupitadesign', label: 'Lupitadesign' }, { value: 'Luvion', label: 'Luvion' }, { value: 'LuvrePro', label: 'LuvrePro' }, { value: 'LYONCLEAN', label: 'LYONCLEAN' }, { value: 'MAAJI', label: 'MAAJI' }, { value: 'Mac  Center', label: 'Mac  Center' }, { value: 'Macaw Spa', label: 'Macaw Spa' }, { value: 'MAGGOX', label: 'MAGGOX' }, { value: 'Magical Warmers', label: 'Magical Warmers' }, { value: 'maglo', label: 'maglo' }, { value: 'Magriña Hnos', label: 'Magriña Hnos' }, { value: 'Makif', label: 'Makif' }, { value: 'Making Waves', label: 'Making Waves' }, { value: 'Mama pulpo', label: 'Mama pulpo' }, { value: 'Mamí¡ Pulpo', label: 'Mamí¡ Pulpo' }, { value: 'Manami S.A.S Mercadoflex', label: 'Manami S.A.S Mercadoflex' }, { value: 'MANTIS', label: 'MANTIS' }, { value: 'manu cavallo', label: 'manu cavallo' }, { value: 'MAQUISTORE SAS', label: 'MAQUISTORE SAS' }, { value: 'marca element five sas', label: 'marca element five sas' }, { value: 'MARCELO SYSTEMS', label: 'MARCELO SYSTEMS' },
{ value: 'Marcia', label: 'Marcia' }, { value: 'Maria Restrepo Enigma', label: 'Maria Restrepo Enigma' }, { value: 'Markafacil Medellin', label: 'Markafacil Medellin' }, { value: 'marketing por dos', label: 'marketing por dos' }, { value: 'maro', label: 'maro' }, { value: 'MARVIK3D', label: 'MARVIK3D' }, { value: 'Mashini', label: 'Mashini' }, { value: 'MASMT S.A.', label: 'MASMT S.A.' }, { value: 'MASTER SUPPLY', label: 'MASTER SUPPLY' }, { value: 'MasterEquipos SAS', label: 'MasterEquipos SAS' }, { value: 'MatchiStore', label: 'MatchiStore' }, { value: 'Materre', label: 'Materre' }, { value: 'Mateusmktoolscomco', label: 'Mateusmktoolscomco' }, { value: 'MATUN', label: 'MATUN' }, { value: 'Mauricio Ruiz', label: 'Mauricio Ruiz' }, { value: 'Mayorista Mexico', label: 'Mayorista Mexico' }, { value: 'MC Optica', label: 'MC Optica' }, { value: 'Meals', label: 'Meals' }, { value: 'MechanicStore', label: 'MechanicStore' }, { value: 'MedellinCaliBarranquilla', label: 'MedellinCaliBarranquilla' }, { value: 'MEDICAL MARKET', label: 'MEDICAL MARKET' }, { value: 'MEDISPOT SAPI DE CV', label: 'MEDISPOT SAPI DE CV' }, { value: 'MEGA CLICK', label: 'MEGA CLICK' }, { value: 'MembersNaider', label: 'MembersNaider' },
{ value: 'MEME', label: 'MEME' }, { value: 'Mementica', label: 'Mementica' }, { value: 'Mendel', label: 'Mendel' }, { value: 'Mensajeria', label: 'Mensajeria' }, { value: 'Mercado flex', label: 'Mercado flex' }, { value: 'Mercedes Campuzano', label: 'Mercedes Campuzano' }, { value: 'Mercy', label: 'Mercy' }, { value: 'Merz', label: 'Merz' }, { value: 'mexico', label: 'mexico' }, { value: 'Mi foto Pro', label: 'Mi foto Pro' }, { value: 'MIC', label: 'MIC' }, { value: 'Michaelo Jeans', label: 'Michaelo Jeans' }, { value: 'Mig Mexico', label: 'Mig Mexico' }, { value: 'Migos', label: 'Migos' }, { value: 'milaborit', label: 'milaborit' }, { value: 'MINDCONTINE INC', label: 'MINDCONTINE INC' }, { value: 'MindCotine Mexico', label: 'MindCotine Mexico' }, { value: 'MindCotine.ARG', label: 'MindCotine.ARG' }, { value: 'Mini precios', label: 'Mini precios' }, { value: 'MiSHAndi', label: 'MiSHAndi' }, { value: 'MJV Joyas', label: 'MJV Joyas' }, { value: 'Mochila de rappi', label: 'Mochila de rappi' }, { value: 'Moda Tura­n', label: 'Moda Tura­n' }, { value: 'MODATECNO TU TIENDA IDEAL', label: 'MODATECNO TU TIENDA IDEAL' }, { value: 'MODO LISO', label: 'MODO LISO' }, { value: 'Momentos Newborn', label: 'Momentos Newborn' },
{ value: 'moofi.paper', label: 'moofi.paper' }, { value: 'Moongs Cali', label: 'Moongs Cali' }, { value: 'Morado App SAS', label: 'Morado App SAS' }, { value: 'Morashop', label: 'Morashop' }, { value: 'Morimoto Gourmet', label: 'Morimoto Gourmet' }, { value: 'morphconsultores', label: 'morphconsultores' }, { value: 'Motometa MX', label: 'Motometa MX' }, { value: 'MotoMetamx', label: 'MotoMetamx' }, { value: 'Motorline', label: 'Motorline' }, { value: 'motoscba', label: 'motoscba' }, { value: 'movenpick', label: 'movenpick' }, { value: 'MOVILTRONICS', label: 'MOVILTRONICS' }, { value: 'Movistar', label: 'Movistar' }, { value: 'movitec', label: 'movitec' }, { value: 'mrtoys', label: 'mrtoys' }, { value: 'MUCCA', label: 'MUCCA' }, { value: 'Multiplaza Bogotí¡ Express', label: 'Multiplaza Bogotí¡ Express' }, { value: 'MULTISHOPS', label: 'MULTISHOPS' }, { value: 'MUNDO PIJAMA', label: 'MUNDO PIJAMA' }, { value: 'MundoFit', label: 'MundoFit' }, { value: 'Muni Tiendas', label: 'Muni Tiendas' }, { value: 'Murillo Elegants', label: 'Murillo Elegants' }, { value: 'Muyay', label: 'Muyay' }, { value: 'My Magic Mouse', label: 'My Magic Mouse' }, { value: 'Nacion Runner', label: 'Nacion Runner' },
{ value: 'Nadin.lenceria', label: 'Nadin.lenceria' }, { value: 'NAF NAF', label: 'NAF NAF' }, { value: 'Naka Outdoors', label: 'Naka Outdoors' }, { value: 'NATURAL DELI MARKET', label: 'NATURAL DELI MARKET' }, { value: 'Natvida', label: 'Natvida' }, { value: 'NESPRESSO', label: 'NESPRESSO' }, { value: 'NESTLE DE COLOMBIA S.A', label: 'NESTLE DE COLOMBIA S.A' }, { value: 'NEW BALANCE', label: 'NEW BALANCE' }, { value: 'NEWRBAN', label: 'NEWRBAN' }, { value: 'NICOTIENDASFLEX', label: 'NICOTIENDASFLEX' }, { value: 'NICTOM ARGENTINA', label: 'NICTOM ARGENTINA' }, { value: 'Nihome', label: 'Nihome' }, { value: 'Ninja México', label: 'Ninja México' }, { value: 'Nisuta', label: 'Nisuta' }, { value: 'No indica', label: 'No indica' }, { value: 'nochik', label: 'nochik' }, { value: 'Noga', label: 'Noga' }, { value: 'Noimporta', label: 'Noimporta' }, { value: 'Nombre:  Fronteras Yerba Mate', label: 'Nombre:  Fronteras Yerba Mate' }, { value: 'norfrig srl', label: 'norfrig srl' }, { value: 'NOTEBOOKS CORDOBA', label: 'NOTEBOOKS CORDOBA' }, { value: 'NOTEBOOKSAR', label: 'NOTEBOOKSAR' }, { value: 'NOTEBOOKSCORDOBA SRL', label: 'NOTEBOOKSCORDOBA SRL' }, { value: 'NotebooksSAS', label: 'NotebooksSAS' },
{ value: 'NotebooksSRL', label: 'NotebooksSRL' }, { value: 'Nova helados y cafe', label: 'Nova helados y cafe' }, { value: 'Novi Technology', label: 'Novi Technology' }, { value: 'Novili', label: 'Novili' }, { value: 'NOXION', label: 'NOXION' }, { value: 'Nuestro Secreto', label: 'Nuestro Secreto' }, { value: 'Nuevo Capí­tulo', label: 'Nuevo Capí­tulo' }, { value: 'NULL', label: 'NULL' }, { value: 'Nutrición AOX', label: 'Nutrición AOX' }, { value: 'NutritionGO', label: 'NutritionGO' }, { value: 'Nyr Spa', label: 'Nyr Spa' }, { value: 'NYT ARDILAS.R.L', label: 'NYT ARDILAS.R.L' }, { value: 'Oasis Verde Prod', label: 'Oasis Verde Prod' }, { value: 'OasisVerde', label: 'OasisVerde' }, { value: 'OffCorss CEDI', label: 'OffCorss CEDI' }, { value: 'Ofimarcas Bogota', label: 'Ofimarcas Bogota' }, { value: 'ohn Hader Moreno Pescador', label: 'ohn Hader Moreno Pescador' }, { value: 'Olga Lucí­a Ramí­rez Serna', label: 'Olga Lucí­a Ramí­rez Serna' }, { value: 'Omas Mucho Mas', label: 'Omas Mucho Mas' }, { value: 'On the rocks', label: 'On the rocks' }, { value: 'ONE NUTRITION', label: 'ONE NUTRITION' }, { value: 'Only Bags', label: 'Only Bags' }, { value: 'OnTheRocks', label: 'OnTheRocks' }, { value: 'OnTop', label: 'OnTop' },
{ value: 'Operaciones@conecty.co', label: 'Operaciones@conecty.co' }, { value: 'oportutek b2b', label: 'oportutek b2b' }, { value: 'Optica.Paesani', label: 'Optica.Paesani' }, { value: 'Optima SpA', label: 'Optima SpA' }, { value: 'Orden de prueba', label: 'Orden de prueba' }, { value: 'Origami Rosario', label: 'Origami Rosario' }, { value: 'ORTOMOLECULAR', label: 'ORTOMOLECULAR' }, { value: 'Outlet Shoes Mx', label: 'Outlet Shoes Mx' }, { value: 'Oxford', label: 'Oxford' }, { value: 'Ozonizer', label: 'Ozonizer' }, { value: 'ozonizer.devoluciones', label: 'ozonizer.devoluciones' }, { value: 'Pablo Custo', label: 'Pablo Custo' }, { value: 'Pacific Shark By Dominique', label: 'Pacific Shark By Dominique' }, { value: 'PacificShark', label: 'PacificShark' }, { value: 'Padilak', label: 'Padilak' }, { value: 'Paesani.mercadolibre', label: 'Paesani.mercadolibre' }, { value: 'PanterTienda', label: 'PanterTienda' }, { value: 'Papu Baby', label: 'Papu Baby' }, { value: 'PAPU.BABY.OFFLINE', label: 'PAPU.BABY.OFFLINE' }, { value: 'PASARELA SPA', label: 'PASARELA SPA' }, { value: 'PASTO S.R.L', label: 'PASTO S.R.L' }, { value: 'Pat Primo', label: 'Pat Primo' }, { value: 'PAYMOVIL BWISE', label: 'PAYMOVIL BWISE' },
{ value: 'PC Core', label: 'PC Core' }, { value: 'PCA1 MX', label: 'PCA1 MX' }, { value: 'pccore', label: 'pccore' }, { value: 'PCM4 MX', label: 'PCM4 MX' }, { value: 'pedidos wawaw', label: 'pedidos wawaw' }, { value: 'pedidos.ya', label: 'pedidos.ya' }, { value: 'Pedraza Ilustración', label: 'Pedraza Ilustración' }, { value: 'Pedraza.ilustraciones', label: 'Pedraza.ilustraciones' }, { value: 'Pekassugar', label: 'Pekassugar' }, { value: 'pelba materiales electricos', label: 'pelba materiales electricos' }, { value: 'pelba2022', label: 'pelba2022' }, { value: 'Pelea electrones SA', label: 'Pelea electrones SA' }, { value: 'pepe ganga', label: 'pepe ganga' }, { value: 'pepeganga cedritos', label: 'pepeganga cedritos' }, { value: 'peperina', label: 'peperina' }, { value: 'peperina2', label: 'peperina2' }, { value: 'Perk Labs', label: 'Perk Labs' }, { value: 'Permoda', label: 'Permoda' }, { value: 'Permoda. com', label: 'Permoda. com' }, { value: 'PetFamily', label: 'PetFamily' }, { value: 'petgourmetmex', label: 'petgourmetmex' }, { value: 'Petsu', label: 'Petsu' }, { value: 'petsu.online', label: 'petsu.online' }, { value: 'pichus', label: 'pichus' }, { value: 'PILATOS', label: 'PILATOS' },
{ value: 'PilatosGranEstacion2 express', label: 'PilatosGranEstacion2 express' }, { value: 'Pink Cloud', label: 'Pink Cloud' }, { value: 'Pintureria Decolor', label: 'Pintureria Decolor' }, { value: 'Pintureriadecolorsas', label: 'Pintureriadecolorsas' }, { value: 'Piola', label: 'Piola' }, { value: 'Pituka shop', label: 'Pituka shop' }, { value: 'Pixie', label: 'Pixie' }, { value: 'Planes Turisticos', label: 'Planes Turisticos' }, { value: 'Planesturisticos.com', label: 'Planesturisticos.com' }, { value: 'Planesturisticoscom  Mercado Libre', label: 'Planesturisticoscom  Mercado Libre' }, { value: 'Planetarium', label: 'Planetarium' }, { value: 'plantorganix', label: 'plantorganix' }, { value: 'Plastik', label: 'Plastik' }, { value: 'Playmore', label: 'Playmore' }, { value: 'plaza', label: 'plaza' }, { value: 'PLEASE', label: 'PLEASE' }, { value: 'Plok', label: 'Plok' }, { value: 'PlushandBits', label: 'PlushandBits' }, { value: 'PMMICRO.COM.MX', label: 'PMMICRO.COM.MX' }, { value: 'Porto Group', label: 'Porto Group' }, { value: 'Positano Vinos', label: 'Positano Vinos' }, { value: 'pranamar', label: 'pranamar' }, { value: 'Praxis Uruguay', label: 'Praxis Uruguay' }, { value: 'PREBEL', label: 'PREBEL' },
{ value: 'Prestigio', label: 'Prestigio' }, { value: 'Price Shoes', label: 'Price Shoes' }, { value: 'Pricesmart', label: 'Pricesmart' }, { value: 'Prilogic', label: 'Prilogic' }, { value: 'Pritty S.A.', label: 'Pritty S.A.' }, { value: 'PRO AUDIO CENTER SA', label: 'PRO AUDIO CENTER SA' }, { value: 'Probus Canin SA', label: 'Probus Canin SA' }, { value: 'ProcesadoresyPartesOffline', label: 'ProcesadoresyPartesOffline' }, { value: 'Profemme', label: 'Profemme' }, { value: 'Professional Shop', label: 'Professional Shop' }, { value: 'Promixcol Bogota Express', label: 'Promixcol Bogota Express' }, { value: 'Prosalon Andino Bogota', label: 'Prosalon Andino Bogota' }, { value: 'prospecto', label: 'prospecto' }, { value: 'PRUEBA', label: 'PRUEBA' }, { value: 'Pruebita', label: 'Pruebita' }, { value: 'PYCO MEDICAL', label: 'PYCO MEDICAL' }, { value: 'Pymedia S.A.', label: 'Pymedia S.A.' }, { value: 'QuéTéQuieres', label: 'QuéTéQuieres' }, { value: 'Queso y Tabla', label: 'Queso y Tabla' }, { value: 'QueTeQuieres', label: 'QueTeQuieres' }, { value: 'quetzaliashop', label: 'quetzaliashop' }, { value: 'QUICK LANE Bessia Center', label: 'QUICK LANE Bessia Center' }, { value: 'Quiero June', label: 'Quiero June' },
{ value: 'Quinto elemento', label: 'Quinto elemento' }, { value: 'RacComercializadora', label: 'RacComercializadora' }, { value: 'Rapi', label: 'Rapi' }, { value: 'Rapiboy', label: 'Rapiboy' }, { value: 'Rappi', label: 'Rappi' }, { value: 'RAPPI_BOLSASMX', label: 'RAPPI_BOLSASMX' }, { value: 'RappiMX', label: 'RappiMX' }, { value: 'Red Sale Woo', label: 'Red Sale Woo' }, { value: 'redes.rvn@gmail.com', label: 'redes.rvn@gmail.com' }, { value: 'Redsale', label: 'Redsale' }, { value: 'Refaccionaria Johan', label: 'Refaccionaria Johan' }, { value: 'Rehab Innovations SAS', label: 'Rehab Innovations SAS' }, { value: 'REINN (Iplus)', label: 'REINN (Iplus)' }, { value: 'Reitmar', label: 'Reitmar' }, { value: 'repartidos', label: 'repartidos' }, { value: 'REPLAY ARKADIA MEDELLIN', label: 'REPLAY ARKADIA MEDELLIN' }, { value: 'Reposterí­a Margarita', label: 'Reposterí­a Margarita' }, { value: 'Retail Holding', label: 'Retail Holding' }, { value: 'RetailJaqueMateSRL', label: 'RetailJaqueMateSRL' }, { value: 'Reves Flex', label: 'Reves Flex' }, { value: 'reveschile', label: 'reveschile' }, { value: 'Ricardo', label: 'Ricardo' }, { value: 'RichTiendaShop', label: 'RichTiendaShop' }, { value: 'riiing tecnologia', label: 'riiing tecnologia' },
{ value: 'Rimax', label: 'Rimax' }, { value: 'rintin', label: 'rintin' }, { value: 'Rita MD', label: 'Rita MD' }, { value: 'rmsinnovaciones', label: 'rmsinnovaciones' }, { value: 'Roca Santa', label: 'Roca Santa' }, { value: 'ROCANLAB', label: 'ROCANLAB' }, { value: 'Rohe', label: 'Rohe' }, { value: 'ROMANTIKA JOYAS', label: 'ROMANTIKA JOYAS' }, { value: 'RopaModa', label: 'RopaModa' }, { value: 'ropero', label: 'ropero' }, { value: 'ROVI MUSIC', label: 'ROVI MUSIC' }, { value: 'royal.bronze', label: 'royal.bronze' }, { value: 'royal.cosmetics', label: 'royal.cosmetics' }, { value: 'RoyalBronze', label: 'RoyalBronze' }, { value: 'Ruber Rojas', label: 'Ruber Rojas' }, { value: 'ruth maria badillo gomez', label: 'ruth maria badillo gomez' }, { value: 'RVN', label: 'RVN' }, { value: 'Sabi Bebes', label: 'Sabi Bebes' }, { value: 'Saint Malo', label: 'Saint Malo' }, { value: 'SALON DEL PEINADOR S.R.L', label: 'SALON DEL PEINADOR S.R.L' }, { value: 'Saltanovich Sanitarios', label: 'Saltanovich Sanitarios' }, { value: 'SaltanovichSanitarios', label: 'SaltanovichSanitarios' }, { value: 'SALUD INTELIGENTE SAS', label: 'SALUD INTELIGENTE SAS' }, { value: 'Salud360', label: 'Salud360' }, { value: 'SALVA TU PIEL', label: 'SALVA TU PIEL' }, { value: 'SAMBAS MED', label: 'SAMBAS MED' }, { value: 'Samping', label: 'Samping' },
{ value: 'SAN PLACIDO SRL', label: 'SAN PLACIDO SRL' }, { value: 'Sanitizacion Ambiente Flex', label: 'Sanitizacion Ambiente Flex' }, { value: 'SANTA MARIANA', label: 'SANTA MARIANA' }, { value: 'Santiago Agudelo', label: 'Santiago Agudelo' }, { value: 'santillana', label: 'santillana' }, { value: 'SANTUA', label: 'SANTUA' }, { value: 'SATORU', label: 'SATORU' }, { value: 'scelis@smarthop.co', label: 'scelis@smarthop.co' }, { value: 'Scorpion', label: 'Scorpion' }, { value: 'SDA', label: 'SDA' }, { value: 'SE OPORTUTEK', label: 'SE OPORTUTEK' }, { value: 'sebastian borrero', label: 'sebastian borrero' }, { value: 'Secnewgate', label: 'Secnewgate' }, { value: 'Selectsoundmx', label: 'Selectsoundmx' }, { value: 'Self Lacing', label: 'Self Lacing' }, { value: 'Sellers', label: 'Sellers' }, { value: 'Sellrs Colombia', label: 'Sellrs Colombia' }, { value: 'Semilla Cosméticos', label: 'Semilla Cosméticos' }, { value: 'SENDA', label: 'SENDA' }, { value: 'Sentir Omm', label: 'Sentir Omm' }, { value: 'SeposElectricidad', label: 'SeposElectricidad' }, { value: 'SERVIENTREGA', label: 'SERVIENTREGA' }, { value: 'Set Point', label: 'Set Point' }, { value: 'SexCordobaShop', label: 'SexCordobaShop' }, { value: 'SFN1', label: 'SFN1' },
{ value: 'SGTDR89617', label: 'SGTDR89617' }, { value: 'sheetmx', label: 'sheetmx' }, { value: 'Shenzhen', label: 'Shenzhen' }, { value: 'SherpyCL', label: 'SherpyCL' }, { value: 'SHIPIN.AR', label: 'SHIPIN.AR' }, { value: 'Shop Administrativo Blush Bar', label: 'Shop Administrativo Blush Bar' }, { value: 'Shopify Wild Travel Chile', label: 'Shopify Wild Travel Chile' }, { value: 'shopify.alphalove', label: 'shopify.alphalove' }, { value: 'shopify.beurer', label: 'shopify.beurer' }, { value: 'Shopify.Denzarnet', label: 'Shopify.Denzarnet' }, { value: 'shopify.kang.racing.mexico', label: 'shopify.kang.racing.mexico' }, { value: 'Shoppy Sur', label: 'Shoppy Sur' }, { value: 'Shopwill', label: 'Shopwill' }, { value: 'Silihard', label: 'Silihard' }, { value: 'Silver plane', label: 'Silver plane' }, { value: 'SimasCircuito', label: 'SimasCircuito' }, { value: 'singularstore', label: 'singularstore' }, { value: 'SJR1 MX Dueño', label: 'SJR1 MX Dueño' }, { value: 'SKYBRANDS', label: 'SKYBRANDS' }, { value: 'Sleepyhead', label: 'Sleepyhead' }, { value: 'SLIM COMPANY', label: 'SLIM COMPANY' }, { value: 'smart brands', label: 'smart brands' }, { value: 'smartop', label: 'smartop' }, { value: 'SMARTSOPORTES', label: 'SMARTSOPORTES' },
{ value: 'Sneaker Art', label: 'Sneaker Art' }, { value: 'Soleil Mexico', label: 'Soleil Mexico' }, { value: 'Soluciones de Contacto', label: 'Soluciones de Contacto' }, { value: 'solucionestecnocbaBIGSALE', label: 'solucionestecnocbaBIGSALE' }, { value: 'SOMOS PURA', label: 'SOMOS PURA' }, { value: 'SONOLINE SA de CV', label: 'SONOLINE SA de CV' }, { value: 'SONOLINESADECV', label: 'SONOLINESADECV' }, { value: 'SOR JUANA', label: 'SOR JUANA' }, { value: 'Sotral', label: 'Sotral' }, { value: 'SPAM', label: 'SPAM' }, { value: 'SpeedBoss', label: 'SpeedBoss' }, { value: 'SPIRITO', label: 'SPIRITO' }, { value: 'Sport Zone', label: 'Sport Zone' }, { value: 'SPORTSPLACE', label: 'SPORTSPLACE' }, { value: 'SSYPP SRL', label: 'SSYPP SRL' }, { value: 'starligh', label: 'starligh' }, { value: 'STAY YOUNG COMPANY', label: 'STAY YOUNG COMPANY' }, { value: 'Stenfar', label: 'Stenfar' }, { value: 'Stockinlavanda', label: 'Stockinlavanda' }, { value: 'Street Dogs', label: 'Street Dogs' }, { value: 'Su Presencia', label: 'Su Presencia' }, { value: 'subastasmerc', label: 'subastasmerc' }, { value: 'Sugo', label: 'Sugo' }, { value: 'Sumaq', label: 'Sumaq' }, { value: 'Sumup', label: 'Sumup' }, { value: 'Sunspectra', label: 'Sunspectra' },
{ value: 'SUPER FERRETERIA', label: 'SUPER FERRETERIA' }, { value: 'superdry', label: 'superdry' }, { value: 'superdryarkadia@estudiodemoda.com.co', label: 'superdryarkadia@estudiodemoda.com.co' }, { value: 'Suretail', label: 'Suretail' }, { value: 'SURETAILSPA', label: 'SURETAILSPA' }, { value: 'Surtitodo', label: 'Surtitodo' }, { value: 'SUSAN GOMEZ', label: 'SUSAN GOMEZ' }, { value: 'Sutra Beauty MX', label: 'Sutra Beauty MX' }, { value: 'Taca Taca', label: 'Taca Taca' }, { value: 'tacodebistec', label: 'tacodebistec' }, { value: 'Taidongo', label: 'Taidongo' }, { value: 'Teal Compass', label: 'Teal Compass' }, { value: 'Team Foods', label: 'Team Foods' }, { value: 'Teca pos', label: 'Teca pos' }, { value: 'Tecknicam', label: 'Tecknicam' }, { value: 'TECNOCENT', label: 'TECNOCENT' }, { value: 'TECNOESHOP CBA S.A.S.', label: 'TECNOESHOP CBA S.A.S.' }, { value: 'Tecnofast', label: 'Tecnofast' }, { value: 'Tecnogo', label: 'Tecnogo' }, { value: 'Tecnorth SA', label: 'Tecnorth SA' }, { value: 'Tecsade', label: 'Tecsade' }, { value: 'Tecspal argentina', label: 'Tecspal argentina' }, { value: 'Tejano Jeans', label: 'Tejano Jeans' }, { value: 'TELCOMEX', label: 'TELCOMEX' }, { value: 'TeLoImporto', label: 'TeLoImporto' },
{ value: 'tenebres', label: 'tenebres' }, { value: 'TENNIS', label: 'TENNIS' }, { value: 'TESTNICODEMO', label: 'TESTNICODEMO' }, { value: 'TESTSOPORTE', label: 'TESTSOPORTE' }, { value: 'Textil Anit Mari', label: 'Textil Anit Mari' }, { value: 'The Kids Market', label: 'The Kids Market' }, { value: 'THE-BABY-SHOP', label: 'THE-BABY-SHOP' }, { value: 'theorycal apparel', label: 'theorycal apparel' }, { value: 'Tiba salud', label: 'Tiba salud' }, { value: 'TiBIRI.CONTENTTI', label: 'TiBIRI.CONTENTTI' }, { value: 'Tienda Condesa Gin', label: 'Tienda Condesa Gin' }, { value: 'tienda.sarmiento', label: 'tienda.sarmiento' }, { value: 'tiendaalmar', label: 'tiendaalmar' }, { value: 'tiendaballerina', label: 'tiendaballerina' }, { value: 'TiendaLexico', label: 'TiendaLexico' }, { value: 'TiendaObjetos', label: 'TiendaObjetos' }, { value: 'Tiendaprop', label: 'Tiendaprop' }, { value: 'Tiendas Freeport', label: 'Tiendas Freeport' }, { value: 'Tips y Temas Agronomicos', label: 'Tips y Temas Agronomicos' }, { value: 'TN INDUTOT', label: 'TN INDUTOT' }, { value: 'tn.bastard', label: 'tn.bastard' }, { value: 'tn.blunder', label: 'tn.blunder' }, { value: 'tn.demo_support', label: 'tn.demo_support' }, { value: 'tn.easybuy', label: 'tn.easybuy' },
{ value: 'tn.emma.blanc', label: 'tn.emma.blanc' }, { value: 'tn.fashionity', label: 'tn.fashionity' }, { value: 'tn.ger', label: 'tn.ger' }, { value: 'tn.kamala.organic', label: 'tn.kamala.organic' }, { value: 'tn.kie.brand', label: 'tn.kie.brand' }, { value: 'tn.la.feria.del.calzado', label: 'tn.la.feria.del.calzado' }, { value: 'tn.master.health', label: 'tn.master.health' }, { value: 'tn.maui.design', label: 'tn.maui.design' }, { value: 'tn.michaelo.jeans', label: 'tn.michaelo.jeans' }, { value: 'tn.noxion', label: 'tn.noxion' }, { value: 'tn.Prany', label: 'tn.Prany' }, { value: 'tn.Sidonia', label: 'tn.Sidonia' }, { value: 'tn.tienda.bleck', label: 'tn.tienda.bleck' }, { value: 'tn.tienda.verde', label: 'tn.tienda.verde' }, { value: 'tn.todoperfumes', label: 'tn.todoperfumes' }, { value: 'tn.Wynibox', label: 'tn.Wynibox' }, { value: 'Tobias Novillo Saravia', label: 'Tobias Novillo Saravia' }, { value: 'TODAS LAS LUCES', label: 'TODAS LAS LUCES' }, { value: 'Todo en maquillaje', label: 'Todo en maquillaje' }, { value: 'todo.en.maquillaje', label: 'todo.en.maquillaje' }, { value: 'todofersa', label: 'todofersa' }, { value: 'TODOSOBRERUEDAS_ONLINE', label: 'TODOSOBRERUEDAS_ONLINE' },
{ value: 'Tomas Aparicio', label: 'Tomas Aparicio' }, { value: 'Tomate Cherry', label: 'Tomate Cherry' }, { value: 'TOOLS.WORLD', label: 'TOOLS.WORLD' }, { value: 'Totto', label: 'Totto' }, { value: 'Touche Store', label: 'Touche Store' }, { value: 'Toy Smart', label: 'Toy Smart' }, { value: 'Traficante', label: 'Traficante' }, { value: 'Traumer Bier', label: 'Traumer Bier' }, { value: 'TravelBooks', label: 'TravelBooks' }, { value: 'Travesuras Tiendas', label: 'Travesuras Tiendas' }, { value: 'TRAVIM', label: 'TRAVIM' }, { value: 'Treinta', label: 'Treinta' }, { value: 'Trentino sa', label: 'Trentino sa' }, { value: 'Tribier SAS', label: 'Tribier SAS' }, { value: 'Trinite Accesorios', label: 'Trinite Accesorios' }, { value: 'Trypmx', label: 'Trypmx' }, { value: 'Tsetian Tovar', label: 'Tsetian Tovar' }, { value: 'Tugow', label: 'Tugow' }, { value: 'turquoise', label: 'turquoise' }, { value: 'tutifundas', label: 'tutifundas' }, { value: 'Tuxs', label: 'Tuxs' }, { value: 'tvwacolombia', label: 'tvwacolombia' }, { value: 'TWO SOUL FRIENDS SAS', label: 'TWO SOUL FRIENDS SAS' }, { value: 'Uala', label: 'Uala' }, { value: 'Ugly Christmas', label: 'Ugly Christmas' }, { value: 'Uman', label: 'Uman' },
{ value: 'Un antojito', label: 'Un antojito' }, { value: 'UNDA MEXICO', label: 'UNDA MEXICO' }, { value: 'UNIVERSIA3', label: 'UNIVERSIA3' }, { value: 'Universo.Escolar', label: 'Universo.Escolar' }, { value: 'Update Estudio', label: 'Update Estudio' }, { value: 'VíƒÂ­a Cotone', label: 'VíƒÂ­a Cotone' }, { value: 'VAL SUMINISTROS', label: 'VAL SUMINISTROS' }, { value: 'Vale Digital', label: 'Vale Digital' }, { value: 'VANESSA HENAO TAMAYO', label: 'VANESSA HENAO TAMAYO' }, { value: 'VAP2 CH', label: 'VAP2 CH' }, { value: 'Vapormex', label: 'Vapormex' }, { value: 'venta stellenzi Mercado Flex', label: 'venta stellenzi Mercado Flex' }, { value: 'Ventana Oriental', label: 'Ventana Oriental' }, { value: 'Ventas Electronicas', label: 'Ventas Electronicas' }, { value: 'Vertice', label: 'Vertice' }, { value: 'Vessi', label: 'Vessi' }, { value: 'VETERINARIA SEBASTIAN', label: 'VETERINARIA SEBASTIAN' }, { value: 'VGToyscoapa', label: 'VGToyscoapa' }, { value: 'VICIMARE', label: 'VICIMARE' }, { value: 'VIP STORE S.R.L.', label: 'VIP STORE S.R.L.' }, { value: 'Vohk', label: 'Vohk' }, { value: 'VOIT', label: 'VOIT' }, { value: 'VTEX', label: 'VTEX' }, { value: 'Vudda', label: 'Vudda' },
{ value: 'Wakefield.Argentina', label: 'Wakefield.Argentina' }, { value: 'Wall Seguridad Integral SRL', label: 'Wall Seguridad Integral SRL' }, { value: 'Wanhulen', label: 'Wanhulen' }, { value: 'Wapet', label: 'Wapet' }, { value: 'Welivery', label: 'Welivery' }, { value: 'Wellcy', label: 'Wellcy' }, { value: 'WellDone PE', label: 'WellDone PE' }, { value: 'Whisky Boutique', label: 'Whisky Boutique' }, { value: 'Widit Store', label: 'Widit Store' }, { value: 'will bloom', label: 'will bloom' }, { value: 'Winkler Nutrition', label: 'Winkler Nutrition' }, { value: 'WMRTZ64579', label: 'WMRTZ64579' }, { value: 'Woo AGW', label: 'Woo AGW' }, { value: 'woo.aromahome', label: 'woo.aromahome' }, { value: 'woo.fujifilmchile', label: 'woo.fujifilmchile' }, { value: 'woo.galvaninsumosmedicos', label: 'woo.galvaninsumosmedicos' }, { value: 'woo.getlov', label: 'woo.getlov' }, { value: 'woo.gruposider', label: 'woo.gruposider' }, { value: 'woo.instax', label: 'woo.instax' }, { value: 'woo.laila.smiches', label: 'woo.laila.smiches' }, { value: 'woo.lestenebres', label: 'woo.lestenebres' }, { value: 'woo.lionesse', label: 'woo.lionesse' }, { value: 'Woo.LoogGuitars', label: 'Woo.LoogGuitars' }, { value: 'woo.mate.electrico', label: 'woo.mate.electrico' },
{ value: 'woo.playboyar', label: 'woo.playboyar' }, { value: 'woo.redfarmashop', label: 'woo.redfarmashop' }, { value: 'woo.rompelelamadre', label: 'woo.rompelelamadre' }, { value: 'woo.silihard', label: 'woo.silihard' }, { value: 'woo.tecknicam3d', label: 'woo.tecknicam3d' }, { value: 'woo.tibasalud', label: 'woo.tibasalud' }, { value: 'woo.vb.tecknicam3d', label: 'woo.vb.tecknicam3d' }, { value: 'woo.x-tech', label: 'woo.x-tech' }, { value: 'woo.ziggytoys', label: 'woo.ziggytoys' }, { value: 'Wynibox', label: 'Wynibox' }, { value: 'XANADI', label: 'XANADI' }, { value: 'XTECHCHILE', label: 'XTECHCHILE' }, { value: 'XTRAIL', label: 'XTRAIL' }, { value: 'Xtreme sports', label: 'Xtreme sports' }, { value: 'YairSWF', label: 'YairSWF' }, { value: 'Yamaha Incolmotos', label: 'Yamaha Incolmotos' }, { value: 'YAYIKA', label: 'YAYIKA' }, { value: 'Yellow  binoculars', label: 'Yellow  binoculars' }, { value: 'Yelow Branch', label: 'Yelow Branch' }, { value: 'Yendi Bendi', label: 'Yendi Bendi' }, { value: 'Yep Chile', label: 'Yep Chile' }, { value: 'yesid corredor', label: 'yesid corredor' }, { value: 'YodaGroup', label: 'YodaGroup' },
{ value: 'YOUWATCHCHILE', label: 'YOUWATCHCHILE' }, { value: 'YoyoFactory', label: 'YoyoFactory' }, { value: 'Yurani Giraldo', label: 'Yurani Giraldo' }, { value: 'Zafapafa', label: 'Zafapafa' }, { value: 'zafirmed', label: 'zafirmed' }, { value: 'Zalt', label: 'Zalt' }, { value: 'Zapatos Quin Footwear', label: 'Zapatos Quin Footwear' }, { value: 'ZCO2 - CL', label: 'ZCO2 - CL' }, { value: 'ZENMART', label: 'ZENMART' }, { value: 'Zibbí', label: 'Zibbí' }];
let teams = _.get(this.currentUser, 'teams').map(teams => teams.id);
const form = forms.map(form => form.teamsAuthorized).reduce((a, b) => a.concat(b)), inclued = teams.map(team => form.includes(team)).includes(true);
<div>
    {form ? (() => {
        class searcheBugs extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    conversationId: _.get(context.conversation, 'id'),
                    agentEmail: _.get(currentUser, 'email'),
                    channels: _.get(conversation, 'channels'),
                    idGuia: _.get(conversation.custom, 'guiaStr'),
                    customerId: _.get(context.customer, 'id'),
                    userEmail: _.get(context.customer.attributes.emails[0], 'email'),
                    conversationSecundary: _.get(conversation.custom, 'conversationIdStr'),
                    form: null,
                    success: false,
                    submitting: false,
                    error: false,
                    idRuta: null,
                    attachments: [],
                    queueSS: null,
                    scalationType: null,
                    scalationReason: null,
                    scalationReasonId: null,
                    slaMessage: null,
                    sla: null,
                    description: null,
                    asuntoEmail: null,
                    scalatedConversationMessages: null,
                    scalatedConversation: null,
                    dateRetry: null,
                    date: null,
                    dateCortePago: null,
                    dateInicioAdeuda: null,
                    dateFinAdeuda: null,
                    dateInicioDescuentos: null,
                    dateFinDescuentos: null,
                    guideStatus: null,
                    aliadoName: null,
                    city: null,
                    aliadoIdentification: null,
                    bonusAmount: null,
                    amountHours: null,
                    opnAliado: null,
                    opCiudad: null,
                    numCelularCuenta: null,
                    entidad: null,
                    conceptoFaltante: null,
                    falla: null,
                    cuentaBancaria: null,
                    razonFacturacion: null,
                    montoRecarga: null,
                    scalationRazonFacturacion: null,
                    montoFactura: null,
                    tipoFacturacion: null,
                    montoDevolver: null,
                    dateCreateMarca: null,
                    dateRetiroMarca: null,
                    responsableFact: null,
                    brandTienda: null,
                    address: null,
                    destnrioName: null,
                    numContact: null,
                    idAliado: null,
                    nombreProducto: null,
                    idOrden: null,
                    codProducto: null,
                    allyCertify: null,
                    tipoCambio: null,
                    nuevosDatos: null,
                    country: null,
                    idcompany: null,
                    inventarioMarca: null,
                    typeNovedad: null,
                    guiaMiPaquete: null,
                    guiaTercero: null,
                    transportadora: null,
                    emailRegister: null,
                    emailRegister2: null,

                };
            }

            async componentWillMount() {
                const {
                    conversationSecundary
                } = this.state;
                if (this.state.scalatedConversation === null) {
                    let scalated = conversationSecundary
                    let options = {
                        "method": "GET",
                        "headers": {
                            "Authorization": "Bearer ",
                            "content-type": "application/json"
                        }
                    };
                    fetch(`https:/api.com/v1/conversations/${scalated}/messages?page=1&pageSize=1000&sort=desc`, options)
                        .then((response) => {
                            return response.json();
                        })
                        .then((messages) => {
                            this.setState({ scalatedConversationMessages: messages.data });
                        });
                    let options2 = {
                        "method": "GET",
                        "headers": {
                            "Authorization": "Bearer ",
                            "content-type": "application/json"
                        }
                    };
                    fetch(`https://api.com/v1/conversations/${scalated}`, options2)
                        .then((response) => {
                            return response.json();
                        })
                        .then((conversation) => {
                            this.setState({ scalatedConversation: conversation.data });
                        });
                };
            }

            setField(field, val) {
                if (field === "attachments") {
                    let attachmentsArray = this.state.attachments;//Obtiene los archivos subidos al oprimir "adjunto" en el form
                    // Refuerza el tipo MIME solo si el archivo es .xlsx
                    if (val.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
                        const blob = new Blob([val], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
                        const file = new File([blob], val.name, { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
                        attachmentsArray.push(file); // Guarda el archivo reforzado
                    } else {
                        attachmentsArray.push(val); // Guarda otros tipos de archivo sin cambios
                    }
                    console.log("Estado de attachments actualizado:", attachmentsArray);
                    this.setState({ attachments: attachmentsArray });//actualiza el estado
                } else {
                    this.setState({ [field]: val });
                }
            };

            removeAttachmentFile(fileName) {
                let updatedAttachments = this.state.attachments;
                updatedAttachments.forEach((file, index) => {
                    if (file.name === fileName) {
                        updatedAttachments.splice(index, 1);
                        return this.setState({ attachments: updatedAttachments });
                    };
                });
            };

            includesTeam() {
                let opciones = forms.map(form => form.teamsAuthorized.map(el => teams.includes(el) ? form.form : null)).reduce((a, b) => a.concat(b)).filter(el => el != null);
                let values = opciones.map(el => el);
                let formularios = opciones.filter((el, i) => i === values.indexOf(el)); return formularios.map(el => <option value={el}>{el}</option>)
            };

            typingMessage(sla, unit, value) {
                let message = null;
                if (unit === "h" && sla === "1-h") {
                    if (this.state.channels === "whatsapp" || this.state.channels === "chat" || this.state.channels === "email") {
                        message = `Debemos profundizar en los detalles de tu solicitud junto con nuestro equipo especializado. No te preocupes, nos comprometemos a proporcionarte una respuesta en un plazo máximo de ${sla} hora hábil por este medio.`;
                        return this.setField("slaMessage", message);
                    } else {
                        message = `Debemos profundizar en los detalles de tu solicitud junto con nuestro equipo especializado. No te preocupes, nos comprometemos a proporcionarte una respuesta en un plazo máximo de ${sla} horas hábiles por este medio.`;
                        return (
                            this.setField("asuntoEmail", value),
                            this.setField("slaMessage", message));
                    }
                } else if (unit === "m") {
                    if (this.state.channels === "whatsapp" || this.state.channels === "chat") {
                        message = `Debemos profundizar en los detalles de tu solicitud junto con nuestro equipo especializado. No te preocupes, nos comprometemos a proporcionarte una respuesta en un plazo máximo de ${sla} horas por este medio.`;
                        return this.setField("slaMessage", message);
                    } else {
                        message = `Debemos profundizar en los detalles de tu solicitud junto con nuestro equipo especializado. No te preocupes, nos comprometemos a proporcionarte una respuesta en un plazo máximo de ${sla} horas por este medio.`;
                        return (
                            this.setField("asuntoEmail", value),
                            this.setField("slaMessage", message));
                    }
                } else if (unit === "no") {
                    if (this.state.channels === "whatsapp" || this.state.channels === "chat") {
                        /*Case "Interno CS"*/
                    }
                } else {
                    if (this.state.channels === "whatsapp" || this.state.channels === "chat") {
                        message = `Debemos profundizar en los detalles de tu solicitud junto con nuestro equipo especializado. No te preocupes, nos comprometemos a proporcionarte una respuesta en un plazo máximo de ${sla} horas hábiles por este medio.`;
                        return this.setField("slaMessage", message);
                    } else {
                        message = `Debemos profundizar en los detalles de tu solicitud junto con nuestro equipo especializado. No te preocupes, nos comprometemos a proporcionarte una respuesta en un plazo máximo de ${sla} horas hábiles por este medio.`;
                        return (
                            this.setField("asuntoEmail", value),
                            this.setField("slaMessage", message));
                    }
                }
            };

            ajax(data, type) {
                let url = null
                if (type === "messageWithAttachments") {
                    url = "https://api.com/v1/8de41eb4f9e3c69802b21df50f9c8b386"
                } else {
                    url = "https://api.com/v1/63131e9a2f9d8198da845d180f"
                }
                return new Promise((resolve, reject) => {
                    const request = new XMLHttpRequest();
                    request.open("POST", url);
                    request.onreadystatechange = () => {
                        if (request.status >= 200 && request.status < 400) {
                            return resolve();
                        };
                        return reject(request.responseText);
                    };
                    request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                    let formData = new FormData();//Crea el objeto para manejar datos del formulario
                    data.map(prop => formData.append(Object.keys(prop)[0], Object.values(prop)[0]));
                    this.state.attachments.map(attachment => formData.append("attachments", attachment));//Los archivos se agregan en el formData
                    request.send(formData);
                });
            };

            async renderChat(id) {
                const { scalatedConversation } = this.state;
                if (scalatedConversation === null) {
                    let scalated = id
                    let options = {
                        "method": "GET",
                        "headers": {
                            "Authorization": "Bearer ",
                            "content-type": "application/json"
                        }
                    };
                    fetch(`https://api.com/v1/conversations/${scalated}/messages?page=1&pageSize=1000&sort=desc`, options)
                        .then((response) => {
                            return response.json();
                        })
                        .then((messages) => {
                            this.setState({ scalatedConversationMessages: messages.data });
                        });
                    let options2 = {
                        "method": "GET",
                        "headers": {
                            "Authorization": "Bearer ",
                            "content-type": "application/json"
                        }
                    };
                    fetch(`https://api.com/v1/conversations/${scalated}`, options2)
                        .then((response) => {
                            return response.json();
                        })
                        .then((conversation) => {
                            this.setState({ scalatedConversation: conversation.data });
                        });
                    this.setField("submitting", false)
                };
            };

            async sendMessage() {
                const {
                    customerId,
                    userEmail,
                    messageDirection,
                    agentEmail
                } = this.state;
                let scalated = this.state.conversationSecundary;
                if (document.getElementById("bodyMessage").value.length > 10) {
                    this.setField("submitting", true);
                    let data = [
                        { "type": "messageByChat" },
                        { "IdConvo": scalated },
                        { "conversationId": scalated },
                        { "IdCustomer": customerId },
                        { "preview": `Redacted by: ${agentEmail}\nComment: ${document.getElementById("bodyMessage").value}` },
                        { "direction": messageDirection },
                        { "To": userEmail }
                    ];

                    await this.ajax(data, "messageWithAttachments");
                    this.setState({ scalatedConversationMessages: null });
                    this.setState({ scalatedConversation: null });
                    this.state.attachments = [];
                    setTimeout(() => {
                        this.renderChat(scalated);
                    }, 2000);
                } else {
                    alert("Digita más de 10 caracteres");
                };
            };

            async handleSubmit(e) {
                e.preventDefault();
                const {
                    conversationId,
                    agentEmail,
                    form,
                    success,
                    submitting,
                    userEmail,
                    error,
                    scalationReasonId,
                    idGuia,
                    idRuta,
                    sla,
                    channels,
                    queueSS,
                    asuntoEmail,
                    scalationType,
                    scalationReason,
                    customerId,
                    slaMessage,
                    date,
                    dateCortePago,
                    dateInicioAdeuda,
                    dateFinAdeuda,
                    dateInicioDescuentos,
                    dateFinDescuentos,
                    description,
                    aliadoName,
                    city,
                    aliadoIdentification,
                    bonusAmount,
                    amountHours,
                    opnAliado,
                    opCiudad,
                    numCelularCuenta,
                    entidad,
                    conceptoFaltante,
                    falla,
                    cuentaBancaria,
                    montoRecarga,
                    scalationRazonFacturacion,
                    montoFactura,
                    tipoFacturacion,
                    montoDevolver,
                    razonFacturacion,
                    dateCreateMarca,
                    dateRetiroMarca,
                    responsableFact,
                    guideStatus,
                    brandTienda,
                    address,
                    destnrioName,
                    numContact,
                    idAliado,
                    nombreProducto,
                    idOrden,
                    codProducto,
                    allyCertify,
                    tipoCambio,
                    nuevosDatos,
                    country,
                    idcompany,
                    numFactura,
                    inventarioMarca,
                    typeNovedad,
                    guiaMiPaquete,
                    guiaTercero,
                    transportadora,
                    emailRegister,
                    emailRegister2

                } = this.state;
                this.setState({ submitting: true });

                let payload = null;
                let interNote = "";
                let ipMiPaquete = "661fe235ae6b5d7342114c37";
                const countryMapping = {
                    "ar": {
                        ipFinanciero: "650c5999f8ee2e8eba617f14",
                        ipFinancieroMp: "66e305e133d5fa3c874f7e93",
                        ipOperaciones: "65134fb09878826ebc26f957",
                        ipOperacionesMp: "66df6ab011fda41b2b4accc8",
                        ipSupply: "6515849ac448e214cb324a10",
                        ipDarkstore: "651ac25cd5b4782bbb89dc3d",
                        ipControlTower: "644a84647c971b052f5ec4c0",
                        ipPayAliado: "663a2d738a866000108e4476"
                    },
                    "cl": {
                        ipFinanciero: "6617ed43b99a25438f3d7af0",
                        ipFinancieroMp: "66e305e133d5fa3c874f7e93",
                        ipOperaciones: "6617ed922ff4c23d93e22fc4",
                        ipOperacionesMp: "66df6ab011fda41b2b4accc8",
                        ipSupply: "6617edcf7b51896099a1f650",
                        ipDarkstore: "6617ee250e4010144d4cf00c",
                        ipControlTower: "6617ee532ff4c27569e26dd2",
                        ipPayAliado: "663a2d8de77f1c0b03ba40df"
                    },
                    "co": {
                        ipFinanciero: "61f0b6a1aaa4ca50fe2a0d4a",
                        ipFinancieroMp: "66e305e133d5fa3c874f7e93",
                        ipOperaciones: "61d8d530d43660c0bcd90b5f",
                        ipOperacionesMp: "66df6ab011fda41b2b4accc8",
                        ipSupply: "61f1d5572ed72538c92d08a2",
                        ipDarkstore: "62dea53ea7b40941885083c9",
                        ipControlTower: "651ada0b5b9d9934b533d6d6",
                        ipPayAliado: "61f0b6ce1410dec09d41ec12"
                    },
                    "mx": {
                        ipFinanciero: "650c47243d8c6ed5c31fde5b",
                        ipFinancieroMp: "66e305e133d5fa3c874f7e93",
                        ipOperaciones: "65134f81b37630b132b4fb94",
                        ipOperacionesMp: "66df6ab011fda41b2b4accc8",
                        ipSupply: "65158504e8992c16bf0d9099",
                        ipDarkstore: "651ac29685f0a10fce9b6bac",
                        ipControlTower: "651ada319dee6845e9acd9b4",
                        ipPayAliado: "663a2da08a86607e928e4baf"
                    }
                };
                const teamsMapping = {
                    "ar": {
                        financieroSS: "650c93af2d1727cec52eb9a3",
                        financieroMpSS: "66e31af27bdb222291f006fa",
                        operacionesSS: "6513515312efddf0f72c7284",
                        operacionesMpSS: "66e041ffca4bc54724b39f2f",
                        supplySS: "6515854f315a1e24b0973fbf",
                        darkstoreSS: "651ac2c095382b6474520f71",
                        controlTowerSS: "6446d63f94d8bb8614e4edd4",
                        pagoAliadoSS: "663a2eec30a13072a440ce3c"
                    },
                    "cl": {
                        financieroSS: "6617efecfce5507fafa959b1",
                        financieroMpSS: "66e31af27bdb222291f006fa",
                        operacionesSS: "6617efff563e4a87f6968e2a",
                        operacionesMpSS: "66e041ffca4bc54724b39f2f",
                        supplySS: "6617f0157990cc726aabcca7",
                        darkstoreSS: "6617f029f66992b254e4f80f",
                        controlTowerSS: "6617f03a1f111dc427e00209",
                        pagoAliadoSS: "663a2ef9bba853bcb5619998"
                    },
                    "co": {
                        financieroSS: "61f1d7924375a47e0b1fd0a8",
                        financieroMpSS: "66e31af27bdb222291f006fa",
                        operacionesSS: "61cb4af100fc8922d58ab5f4",
                        operacionesMpSS: "66e041ffca4bc54724b39f2f",
                        supplySS: "61f1d70e55b875c599adecb0",
                        darkstoreSS: "620163aa5c7c867a90f6b7b7",
                        controlTowerSS: "651ada4e8b3d9d395dffbdf7",
                        pagoAliadoSS: "61eeb4d95e01c90c73c68b68"
                    },
                    "mx": {
                        financieroSS: "650c93d7aac04be41b71614a",
                        financieroMpSS: "66e31af27bdb222291f006fa",
                        operacionesSS: "64c7d669461e0529fd416289",
                        operacionesMpSS: "66e041ffca4bc54724b39f2f",
                        supplySS: "6515856b8c2044237789c18e",
                        darkstoreSS: "651ac2dd6d5ca15b54a4d2d4",
                        controlTowerSS: "651ada55aae9cb54ecf78bd4",
                        pagoAliadoSS: "663a2f00e2688867340d696f"
                    }
                };
                const getCountry = this.state.country;
                const interProfile = countryMapping[getCountry] && this.state.form === "Financiero" ? countryMapping[getCountry].ipFinanciero : countryMapping[getCountry] && this.state.form === "Financiero MP" ? countryMapping[getCountry].ipFinancieroMp : countryMapping[getCountry] && this.state.form === "Operaciones" ? countryMapping[getCountry].ipOperaciones : countryMapping[getCountry] && this.state.form === "Operaciones MP" ? countryMapping[getCountry].ipOperacionesMp : countryMapping[getCountry] && this.state.form === "Supply" ? countryMapping[getCountry].ipSupply : countryMapping[getCountry] && this.state.form === "Darkstore" ? countryMapping[getCountry].ipDarkstore : countryMapping[getCountry] && this.state.form === "Control Tower" ? countryMapping[getCountry].ipControlTower : countryMapping[getCountry] && this.state.form === "Pago Aliados" ? countryMapping[getCountry].ipPayAliado : "else";
                const teamSS = this.state.form === "Financiero" && countryMapping[getCountry] ? teamsMapping[getCountry].financieroSS : this.state.form === "Financiero MP" && countryMapping[getCountry] ? teamsMapping[getCountry].financieroMpSS : this.state.form === "Operaciones" && countryMapping[getCountry] ? teamsMapping[getCountry].operacionesSS : this.state.form === "Operaciones MP" && countryMapping[getCountry] ? teamsMapping[getCountry].operacionesMpSS : this.state.form === "Supply" && countryMapping[getCountry] ? teamsMapping[getCountry].supplySS : this.state.form === "Darkstore" && countryMapping[getCountry] ? teamsMapping[getCountry].darkstoreSS : this.state.form === "Control Tower" && countryMapping[getCountry] ? teamsMapping[getCountry].controlTowerSS : this.state.form === "Pago Aliados" && countryMapping[getCountry] ? teamsMapping[getCountry].pagoAliadoSS : "else";

                const formFieldTemplates = {
                    financieroMpInfo: `Id Guía: ${idGuia}\nId mi paquete: ${guiaMiPaquete}\nCorreo registrado cliente: ${emailRegister}\nNIT: ${aliadoIdentification}\nRazón social: ${nuevosDatos}\nDirección: ${address}\nCiudad: ${city}\nTeléfono: ${numContact}`,
                    supplyAliadoInfo: `Nombre del aliado: ${aliadoName}\nCédula: ${aliadoIdentification}\nCiudad en la que opera el aliado: ${ciudad}`,
                    supplyProveedorInfo: `Nombre del aliado/proveedor: ${aliadoName}\nCédula/Identificación: ${aliadoIdentification}\nCiudad en la que opera el aliado: ${ciudad}`,
                    supplyGstMarca: `Nombre de la marca: ${marca}\nId Guía: ${idGuia}\nId Ruta: ${idRuta}`
                }

                const internoteConfig = {
                    "financiero_mp.demora_consignacion_recaudo": {
                        extraFields: `${formFieldTemplates.financieroMpInfo}\nTransportadora: ${transportadora}`
                    },
                    "financiero_mp.solicitud_factura_billing": {
                        extraFields: `${formFieldTemplates.financieroMpInfo}\nCorreo recepción factura electrónica: ${emailRegister2}`
                    },
                    "financiero_mp.detalle_facturacion": {
                        extraFields: `${formFieldTemplates.financieroMpInfo}\nCorreo recepción factura electrónica: ${emailRegister2}`
                    },
                    "financiero_mp.problemas_factura_talles_incorrectos": {
                        extraFields: `${formFieldTemplates.financieroMpInfo}\nCorreo recepción factura electrónica: ${emailRegister2}`
                    },
                    "financiero_mp.problemas_pago_recaudos": {
                        extraFields: `${formFieldTemplates.financieroMpInfo}`
                    },
                    "financiero_mp.devolucion_saldo": {
                        extraFields: `${formFieldTemplates.financieroMpInfo}\nCorreo recepción factura electrónica: ${emailRegister2}`
                    },
                    "supply.bonificaciones": {
                        extraFields: `${formFieldTemplates.supplyAliadoInfo}\nId del aliado: ${idAliado}\nId de la ruta: ${idRuta}\nFecha corte de pago: ${dateCortePago}\nFecha inicio del periodo que se adeuda: ${dateInicioAdeuda}\nFecha fin del periodo que se adeuda: ${dateFinAdeuda}\nMonto del bono: ${bonusAmount}`
                    },
                    "supply.confirmacion_pagos_disponibilidad": {
                        extraFields: `${formFieldTemplates.supplyAliadoInfo}\nFecha de días trabajados: ${date}\nFecha corte de pago: ${dateCortePago}\nFecha inicio del periodo que se adeuda: ${dateInicioAdeuda}\nFecha fin del periodo que se adeuda: ${dateFinAdeuda}\nCantidad de horas que se adeudan: ${amountHours}`
                    },
                    "supply.confirmacion_pagos_dedicados": {
                        extraFields: `${formFieldTemplates.supplyAliadoInfo}\nFecha de días trabajados: ${date}\nFecha corte de pago: ${dateCortePago}\nFecha inicio del periodo que se adeuda: ${dateInicioAdeuda}\nFecha fin del periodo que se adeuda: ${dateFinAdeuda}\nOperación a la que pertenece el aliado: ${opnAliado}`
                    },
                    "supply.asignar_aliado1": {
                        extraFields: formFieldTemplates.supplyGstMarca
                    },
                    "supply.demora_recoleccion_aliado_no_contesta1": {
                        extraFields: formFieldTemplates.supplyGstMarca
                    },
                    "supply.demora_aprobacion_documentos_aliado": {
                        extraFields: formFieldTemplates.supplyProveedorInfo
                    },
                    "supply.cambios_documentosDatosVehiculo_aliado": {
                        extraFields: formFieldTemplates.supplyProveedorInfo
                    },
                    "supply.demora_aprobacion_documentos_vehiculo": {
                        extraFields: formFieldTemplates.supplyProveedorInfo
                    },
                    "supply.demora_creacion_proveedor": {
                        extraFields: formFieldTemplates.supplyProveedorInfo
                    },
                    "supply.actualizacion_horario_companypoint": {
                        extraFields: formFieldTemplates.supplyProveedorInfo
                    },
                    "supply.demora_aprobacion_companypoint": {
                        extraFields: formFieldTemplates.supplyProveedorInfo
                    },
                    "supply.actualizacion_datos_companypoint": {
                        extraFields: formFieldTemplates.supplyProveedorInfo
                    },
                    "controlTower.novedades_transporte_nacional": {
                        extraFields: `Tipo de Novedad: ${this.state.typeNovedad}
                                      Id Guía MiPaquete: ${guiaMiPaquete}
                                      Id Guía Transportadora: ${guiaTercero}`,
                        linkPrefix: "com/app/conversations/",
                        interProfile: this.state.typeNovedad === "Desconocimiento de entrega" ||
                            this.state.typeNovedad === "Llegó algo diferente a lo que compro" ||
                            this.state.typeNovedad === "Llegó el paquete en mal estado" ||
                            this.state.typeNovedad === "Novedades Nacionales" ? ipMiPaquete : undefined
                    },
                    "controlTower.retraso_salida_segundos_intentos": {
                        extraFields: `Fecha de marcación del reintento: ${date}`,
                        linkPrefix: "com/app/conversations/"
                    }
                };

                // Obtiene la configuración basada en el ID de la escalación
                const setInternoteconfig = internoteConfig[this.state.scalationReasonId] || {};

                // Construcción de la nota
                interNote = `Agent scalated: ${agentEmail}\n
                Scalation Type: ${scalationType}\n
                Scalation reason: ${scalationReason}\n
                Pais: ${country}\n
                ${setInternoteconfig.extraFields || ""}\n
                Comments: ${description}\n
                Original Conversation: app.com/app/conversations/${conversationId}`;

                /*Operaciones*/
                if (this.state.scalationReasonId === "operations.confirmacion_trazabilidad_real" || this.state.scalationReasonId === "operations.confirmacion_paquete_extraviado_bodega" || this.state.scalationReasonId === "operations.demora_colecta" || this.state.scalationReasonId === "operations.aliado_no_paso_a_retirar_paquete" || this.state.scalationReasonId === "operations.paquete_en_transito_") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nGuia Id: ${idGuia}\nHoja de ruta Id: ${idRuta}\nCiudad: ${city}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "operations.confirmacion_ingreso_company_primeraMilla") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nGuia Id: ${idGuia}\nHoja de ruta Id: ${idRuta}\nCiudad: ${city}\nFecha del estado validado: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "operations.demoras_despacho") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nGuia Id: ${idGuia}\nHoja de ruta Id: ${idRuta}\nCiudad: ${city}\nFecha ingreso al HUB: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                }
                /*Control Tower*/
                else if (this.state.scalationReasonId === "controlTower.paquete_en_transito") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nNombre del aliado: ${aliadoName}\nGuía Id: ${idGuia}\nCiudad: ${ciudad}\nFecha de estado en tránsito: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "controlTower.paquete_retornando") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nNombre del aliado: ${aliadoName}\nHoja de ruta Id: ${idRuta}\nCiudad: ${ciudad}\nFecha de estado en retornando: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "controlTower.asignar_aliado" || this.state.scalationReasonId === "controlTower.demora_recoleccion_aliado_no_contesta") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nGuía Id: ${idGuia}\nHoja de ruta Id: ${idRuta}\nCiudad: ${ciudad}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "controlTower.demoraSLA_distribucion_propia" || this.state.scalationReasonId === "controlTower.desconocimientoEntrega_visitaFallida" || this.state.scalationReasonId === "controlTower.solicitud_inversa" || this.state.scalationReasonId === "controlTower.confirmacion_marcacion_devolucionWH_HUBcompany") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nGuía Id: ${idGuia}\nHoja de ruta Id: ${idRuta}\nCiudad: ${ciudad}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "controlTower.novedades_transporte_nacional" && this.state.typeNovedad === "Demora en la entrega" || this.state.typeNovedad === "Desconocimiento de entrega" || this.state.typeNovedad === "Llegó algo diferente a lo que compro" || this.state.typeNovedad === "Llegó el paquete en mal estado" || this.state.typeNovedad === "Novedades Nacionales") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nTipo de Novedad: ${typeNovedad}\nPais: ${country}\nNombre de la marca: ${marca}\nGuía Id: ${idGuia}\nId Guía MiPaquete: ${guiaMiPaquete}\nCiudad: ${ciudad}\nId Guía Transportadora: ${guiaTercero}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId, interProfile = ipMiPaquete
                } else if (this.state.scalationReasonId === "controlTower.novedades_transporte_nacional") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nTipo de Novedad: ${typeNovedad}\nPais: ${country}\nNombre de la marca: ${marca}\nGuía Id: ${idGuia}\nHoja de ruta Id: ${idRuta}\nCiudad: ${ciudad}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "controlTower.retraso_salida_segundos_intentos") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nGuía Id: ${idGuia}\nHoja de ruta Id: ${idRuta}\nCiudad: ${ciudad}\nFecha de marcación del reintento: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "controlTower.confirmacion_marcacion_devolucion_cedi" || this.state.scalationReasonId === "controlTower.retraso_devolucion_cedi") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nGuía Id: ${idGuia}\nHoja de ruta Id: ${idRuta}\nCiudad: ${ciudad}\nFecha de solicitud de devolución a CEDI: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                }/*Supply*/
                else if (this.state.scalationReasonId === "supply.bonificaciones") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre del aliado: ${aliadoName}\nCédula: ${aliadoIdentification}\nID del aliado: ${idAliado}\nCiudad en la que opera el aliado: ${ciudad}\nId de la ruta: ${idRuta}\nFecha corte de pago: ${dateCortePago}\nFecha inicio del periodo que se adeuda: ${dateInicioAdeuda}\nFecha fin del periodo que se adeuda: ${dateFinAdeuda}\nMonto del bono: ${bonusAmount}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "supply.confirmacion_pagos_disponibilidad") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre del aliado: ${aliadoName}\nCédula: ${aliadoIdentification}\nID del aliado: ${idAliado}\nCiudad en la que opera el aliado: ${ciudad}\nFecha de días trabajados: ${date}\nFecha corte de pago: ${dateCortePago}\nFecha inicio del periodo que se adeuda: ${dateInicioAdeuda}\nFecha fin del periodo que se adeuda: ${dateFinAdeuda}\nCantidad de horas que se adeudan: ${amountHours}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "supply.confirmacion_pagos_dedicados") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre del aliado: ${aliadoName}\nCédula: ${aliadoIdentification}\nID del aliado: ${idAliado}\nCiudad en la que opera el aliado: ${ciudad}\nFecha de días trabajados: ${date}\nFecha corte de pago: ${dateCortePago}\nFecha inicio del periodo que se adeuda: ${dateInicioAdeuda}\nFecha fin del periodo que se adeuda: ${dateFinAdeuda}\nOperación a la que pertenece el aliado: ${opnAliado}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "supply.asignar_aliado1" || this.state.scalationReasonId === "supply.demora_recoleccion_aliado_no_contesta1") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nGuía Id: ${idGuia}\nHoja de ruta Id: ${idRuta}\nCiudad: ${ciudad}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "supply." || this.state.scalationReasonId === "supply.") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPais: ${country}\nNombre de la marca: ${marca}\nGuía Id: ${idGuia}\nHoja de ruta Id: ${idRuta}\nCiudad: ${ciudad}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                }
                /*Pagos*/
                else if (this.state.scalationReasonId === "pagos.falla_actualizacion_datos_pagos") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre del aliado: ${aliadoName}\nNo. Identificación: ${aliadoIdentification}\nID del aliado: ${idAliado}\nCiudad en la que opera el aliado: ${ciudad}\nCelular para pagos / Cuenta bancaria: ${numCelularCuenta}\nEntidad: ${entidad}\nFecha corte de pago: ${dateCortePago}\nFalla presentada: ${falla}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "pagos.aliado_sin_pago") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre del aliado: ${aliadoName}\nNo. Identificación:: ${aliadoIdentification}\nID del aliado: ${idAliado}\nCiudad en la que opera el aliado: ${ciudad}\nCelular para pagos / Cuenta bancaria: ${numCelularCuenta}\nEntidad: ${entidad}\nFecha corte de pago: ${dateCortePago}\nFecha inicio del periodo que se adeuda: ${dateInicioAdeuda}\nFecha fin del periodo que se adeuda: ${dateFinAdeuda}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "pagos.aliado_pago_incompleto") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre del aliado: ${aliadoName}\nNo. Identificación:: ${aliadoIdentification}\nID del aliado: ${idAliado}\nCiudad en la que opera el aliado: ${ciudad}\nCelular para pagos / Cuenta bancaria: ${numCelularCuenta}\nEntidad: ${entidad}\nFecha corte de pago: ${dateCortePago}\nFecha inicio del periodo que se adeuda: ${dateInicioAdeuda}\nFecha fin del periodo que se adeuda: ${dateFinAdeuda}\nConcepto faltante: ${conceptoFaltante}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "pagos.descuentos_no_aplican_no_autorizados") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre del aliado: ${aliadoName}\nNo. Identificación:: ${aliadoIdentification}\nID del aliado: ${idAliado}\nCiudad en la que opera el aliado: ${ciudad}\nCelular para pagos / Cuenta bancaria: ${numCelularCuenta}\nEntidad: ${entidad}\nFecha corte de pago: ${dateCortePago}\nFecha inicio del periodo de los descuentos: ${dateInicioDescuentos}\nFecha fin del periodo de los descuentos: ${dateFinDescuentos}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "pagos.problemas_recaudos") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre del aliado: ${aliadoName}\nNo. Identificación:: ${aliadoIdentification}\nID del aliado: ${idAliado}\nCiudad en la que opera el aliado: ${ciudad}\nId Guía: ${idGuia}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "pagos.solicitud_certificados") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre del aliado: ${aliadoName}\nNo. Identificación:: ${aliadoIdentification}\nID del aliado: ${customerId}\nCertificado: ${allyCertify}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                }/*Financiero*/
                else if (this.state.scalationReasonId === "financiero_marcas.fallas_recargas_clientes_paqueteria") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nMonto recargado: ${montoRecarga}\nFecha de recarga: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "financiero_marcas.solicitud_inicio_proceso_refacturacion_siniestros") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nID guía: ${idGuia}\nRazón de facturación: ${razonFacturacion}\nNombre de aliado: ${aliadoName}\nID de aliado: ${idAliado}\nMonto de la factura: ${montoFactura}\nResponsable de la facturación: ${responsableFact}\nTipo de Refacturación: ${tipoFacturacion}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "financiero_marcas.demora_proceso_refacturacion_siniestros") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nID guía: ${idGuia}\nRazón de facturación: ${razonFacturacion}\nNombre de aliado: ${aliadoName}\nID de aliado: ${idAliado}\nMonto de la factura: ${montoFactura}\nResponsable de la facturación: ${responsableFact}\nTipo de Refacturación: ${tipoFacturacion}\nFecha de escalamiento inicial: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "financiero_marcas.solicitud_devolucion_saldo_cierre_operacion") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nEntidad: ${entidad}\nMonto a devolver: ${montoDevolver}\nFecha de creación de la marca: ${dateCreateMarca}\nFecha de retiro de la marca: ${dateRetiroMarca}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "financiero_marcas.solicitud_factura" || this.state.scalationReasonId === "financiero_marcas.solicitud_estado_cuenta" || this.state.scalationReasonId === "financiero_marcas.solicitud_facturas_pendientes" || this.state.scalationReasonId === "financiero_marcas.actualizar_correo_facturacion") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nMes de factura solicitada: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "financiero_marcas.problemas_factura_talles" || this.state.scalationReasonId === "financiero_marcas.problemas_factura_tarifas" || this.state.scalationReasonId === "financiero_marcas.problemas_factura_bono" || this.state.scalationReasonId === "financiero_marcas.problemas_factura_descuentos" || this.state.scalationReasonId === "financiero_marcas.problemas_factura_deuda" || this.state.scalationReasonId === "financiero_marcas.confirmacion_soporte_pago") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nID guía: ${idGuia}\nNúmero de Factura: ${numFactura}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "financiero_marcas.cobro_driver_adicional_petco_mx") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre tienda: ${marca}\nCantidad drivers adicionales: ${nuevosDatos}\nFecha de inicio driver adicional: ${date}\nCosto // Valor indicado por Supply: ${montoFactura}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "financiero_marcas.cobro_corte_adicional_petco_mx") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre tienda: ${marca}\nCantidad de cortes adicionales: ${nuevosDatos}\nFecha de inicio corte adicional: ${date}\nCosto // Valor indicado por Supply: ${montoFactura}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                }
                /*Interno CS*/
                else if (this.state.scalationReasonId === "interno_cs.problemas_recoleccion_producto_no_disponible") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre de la marca: ${brandName}\nTienda: ${brandTienda}\nNombre del aliado: ${aliadoName}\nId Guía: ${idGuia}\nCiudad: ${city}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "interno_cs.novedades_entrega_segundos_intentos") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre de la marca: ${brandName}\nID guía: ${idGuia}\nDirección actualizada + Complemento: ${address}\nNombre del destinatario: ${destnrioName}\nTeléfono destinatario: ${numContact}\nCiudad: ${city}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "interno_cs.reconocimientos") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre de la marca: ${brandName}\nID guía / orden: ${idGuia}\nCiudad: ${city}\nDirección de entrega: ${address}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "interno_cs.refacturacion") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre de la marca: ${brandName}\nID guía / orden: ${idGuia}\nCiudad: ${city}\nCausa: ${falla}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                }/*Darkstore*/
                else if (this.state.scalationReasonId === "darkstore.solicitud_creacion_servicio_demora_despacho" || this.state.scalationReasonId === "darkstore.cancelar_alistamiento_guia_no_creada" || this.state.scalationReasonId === "darkstore.solicitud_relacion_serial_orden" || this.state.scalationReasonId === "darkstore.actualizacion_fulfilment") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nNúmero de orden: ${idOrden}\nCiudad de la darkstore: ${city}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "darkstore.demora_status_picking_de_orden" || this.state.scalationReasonId === "darkstore.troque_alistamiento") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nNúmero de orden: ${idOrden}\nId Guía: ${idGuia}\nCiudad: ${city}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "darkstore.producto_extraviado_averiado_en_darkstore") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nNúmero de orden: ${idOrden}\nId Guía: ${idGuia}\nCiudad: ${city}\nNombre de producto: ${nombreProducto}\nCódigo referencia principal del producto: ${codProducto}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "darkstore.notificacion_confirmacion_abastecimiento") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nNúmero de orden: ${idOrden}\nCiudad: ${city}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "darkstore.devolucion_a_darkstore") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nNúmero de orden: ${idOrden}\nId Guía: ${idGuia}\nCiudad: ${city}\nNombre del aliado: ${aliadoName}\nCedula del aliado: ${aliadoIdentification}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "darkstore.solicitud_conciliacion_inventario") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nUnidades en las que se presenta diferencias: ${nuevosDatos}\nCiudad: ${city}\nNombre del WMS: ${nombreProducto}\nInventario enviado por la marca: ${inventarioMarca}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "darkstore.demorasDespacho_procesamientoCampañas") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nFecha de la campaña: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "darkstore.creacion_campañas") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "darkstore.recepcion_abastecimiento_campañas") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nFecha de envío de abastecimiento: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                } else if (this.state.scalationReasonId === "darkstore.recoleccion_productos_campañas") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nFecha de recolección: ${date}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                }/*Customer Service*/
                else if (this.state.scalationReasonId === "customer_service.confirmacion_direccion_entrega") {
                    interNote = `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nNombre de la marca: ${brandName}\nId Guía/orden: ${idGuia}\nNombre del Destinatario: ${destnrioName}\nTelefono destinatario: ${numContact}\nCiudad: ${city}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId
                }/*Supply*/

                const payloadConfig = {
                    "aliados@mail.com": ["Supply"],
                    "clientes@mailcom": ["Operaciones", "Pago Aliados", "Financiero", "Interno CS", "Darkstore", "Customer Service", "Control Tower"],
                    "clientes@mail.com": ["Operaciones MP", "Financiero MP"]
                };

                const setPayloadConfig = Object.fromEntries(
                    Object.entries(payloadConfig).flatMap(([pEmail, pForms]) =>
                        pForms.map(form => [form, { fromPostmark: pEmail }])
                    )
                );

                payload = [
                    { "queue": queueSS },
                    { "channels": channels },
                    { "customerId": customerId },
                    { "agentEmail": agentEmail },
                    { "origin": scalationType },
                    { "conversationId": conversationId },
                    { "tags": ["61d5e7295d44c9faff6e7b28"] },
                    { "idGuia": idGuia },
                    { "idRuta": idRuta },
                    { "marca": marca },
                    { "form": form },
                    { "scalationReason": scalationReason },
                    { "slaMessage": slaMessage },
                    { "scalationReasonId": scalationReasonId },
                    { "sla": sla },
                    { "conversationName": scalationReason },
                    { "asuntoEmail": asuntoEmail },
                    { "userEmail": userEmail },
                    { "interProfile": interProfile },
                    { "interNote": interNote },
                    { "country": country },
                    { "teamSS": teamSS },
                    { "fromPostmark": setPayloadConfig[form]?.fromPostmark || "default@gmail.com" } // Valor por defecto si el form no coincide
                ];

                if (internoteConfig.extraFields) {
                    Object.entries(internoteConfig.extraFields).forEach(([key, value]) => {
                        payload.push({ [key]: value });
                    });
                }

                /*Operaciones*/
                if (form === "Operaciones") {
                    payload = [
                        { "queue": queueSS },
                        { "channels": channels },
                        { "customerId": customerId },
                        { "agentEmail": agentEmail },
                        { "origin": scalationType },
                        { "conversationId": conversationId },
                        { "tags": ["61d5e7295d44c9faff6e7b28"] },
                        { "idGuia": idGuia },
                        { "idRuta": idRuta },
                        { "marca": marca },
                        { "form": form },
                        { "scalationReason": scalationReason },
                        { "slaMessage": slaMessage },
                        { "scalationReasonId": scalationReasonId },
                        { "sla": sla },
                        { "conversationName": scalationReason },
                        { "asuntoEmail": asuntoEmail },
                        { "userEmail": userEmail },
                        { "interProfile": interProfile },
                        { "fromPostmark": "clientes@mailcom" },
                        { "interNote": interNote },
                        { "country": country },
                        { "teamSS": teamSS }
                    ]
                } else if (form === "Pago Aliados") {
                    payload = [
                        { "queue": queueSS },
                        { "channels": channels },
                        { "customerId": customerId },
                        { "agentEmail": agentEmail },
                        { "origin": scalationType },
                        { "conversationId": conversationId },
                        { "tags": ["61d5e7295d44c9faff6e7b28"] },
                        { "idGuia": idGuia },
                        { "idRuta": idRuta },
                        { "brandName": brandName },
                        { "form": form },
                        { "scalationReason": scalationReason },
                        { "slaMessage": slaMessage },
                        { "scalationReasonId": scalationReasonId },
                        { "sla": sla },
                        { "conversationName": scalationReason },
                        { "asuntoEmail": asuntoEmail },
                        { "userEmail": userEmail },
                        { "interProfile": interProfile },
                        { "fromPostmark": "clientes@mailcom" },
                        { "interNote": interNote },
                        { "aliadoName": aliadoName },
                        { "country": country },
                        { "teamSS": teamSS }
                    ]
                } else if (form === "Financiero") {
                    payload = [
                        { "queue": queueSS },
                        { "channels": channels },
                        { "customerId": customerId },
                        { "agentEmail": agentEmail },
                        { "origin": scalationType },
                        { "conversationId": conversationId },
                        { "tags": ["61d5e7295d44c9faff6e7b28"] },
                        { "idGuia": idGuia },
                        { "idRuta": idRuta },
                        { "marca": marca },
                        { "form": form },
                        { "scalationReason": scalationReason },
                        { "slaMessage": slaMessage },
                        { "scalationReasonId": scalationReasonId },
                        { "sla": sla },
                        { "conversationName": scalationReason },
                        { "asuntoEmail": asuntoEmail },
                        { "userEmail": userEmail },
                        { "interProfile": interProfile },
                        { "fromPostmark": "clientes@mailcom" },
                        { "interNote": interNote },
                        { "aliadoName": aliadoName },
                        { "country": country },
                        { "teamSS": teamSS }
                    ]
                } else if (form === "Interno CS") {
                    payload = [
                        { "queue": queueSS },
                        { "channels": channels },
                        { "customerId": customerId },
                        { "agentEmail": agentEmail },
                        { "origin": scalationType },
                        { "conversationId": conversationId },
                        { "tags": ["61d5e7295d44c9faff6e7b28"] },
                        { "idGuia": idGuia },
                        { "idRuta": idRuta },
                        { "brandName": brandName },
                        { "form": form },
                        { "scalationReason": scalationReason },
                        { "slaMessage": slaMessage },
                        { "scalationReasonId": scalationReasonId },
                        { "sla": sla },
                        { "conversationName": scalationReason },
                        { "asuntoEmail": asuntoEmail },
                        { "userEmail": userEmail },
                        { "interProfile": "624b68cf77879b021f089b58" },
                        { "fromPostmark": "clientes@mailcom" },
                        { "interNote": interNote }
                    ]
                } else if (form === "Darkstore") {
                    payload = [
                        { "queue": queueSS },
                        { "channels": channels },
                        { "customerId": customerId },
                        { "agentEmail": agentEmail },
                        { "origin": scalationType },
                        { "conversationId": conversationId },
                        { "tags": ["61d5e7295d44c9faff6e7b28"] },
                        { "idGuia": idGuia },
                        { "idRuta": idRuta },
                        { "marca": marca },
                        { "form": form },
                        { "scalationReason": scalationReason },
                        { "slaMessage": slaMessage },
                        { "scalationReasonId": scalationReasonId },
                        { "sla": sla },
                        { "conversationName": scalationReason },
                        { "asuntoEmail": asuntoEmail },
                        { "userEmail": userEmail },
                        { "interProfile": interProfile },
                        { "fromPostmark": "clientes@mailcom" },
                        { "interNote": interNote },
                        { "country": country },
                        { "teamSS": teamSS }
                    ]
                } else if (form === "Customer Service") {
                    payload = [
                        { "queue": queueSS },
                        { "channels": channels },
                        { "customerId": customerId },
                        { "agentEmail": agentEmail },
                        { "origin": scalationType },
                        { "conversationId": conversationId },
                        { "tags": ["61d5e7295d44c9faff6e7b28"] },
                        { "idGuia": idGuia },
                        { "idRuta": idRuta },
                        { "brandName": brandName },
                        { "form": form },
                        { "scalationReason": scalationReason },
                        { "slaMessage": slaMessage },
                        { "scalationReasonId": scalationReasonId },
                        { "sla": sla },
                        { "conversationName": scalationReason },
                        { "asuntoEmail": asuntoEmail },
                        { "userEmail": userEmail },
                        { "interProfile": "62fe4374ed38020f05ad6752" },
                        { "fromPostmark": "clientes@mailcom" },
                        { "interNote": interNote }
                    ]
                } else if (form === "Control Tower") {
                    payload = [
                        { "queue": queueSS },
                        { "channels": channels },
                        { "customerId": customerId },
                        { "agentEmail": agentEmail },
                        { "origin": scalationType },
                        { "conversationId": conversationId },
                        { "tags": ["61d5e7295d44c9faff6e7b28"] },
                        { "idGuia": idGuia },
                        { "idcompany": idcompany },
                        { "marca": marca },
                        { "form": form },
                        { "scalationReason": scalationReason },
                        { "slaMessage": slaMessage },
                        { "scalationReasonId": scalationReasonId },
                        { "sla": sla },
                        { "conversationName": scalationReason },
                        { "asuntoEmail": asuntoEmail },
                        { "userEmail": userEmail },
                        { "interProfile": interProfile },
                        { "fromPostmark": "clientes@mailcom" },
                        { "interNote": interNote },
                        { "country": country },
                        { "teamSS": teamSS }
                    ]
                } else if (form === "Operaciones MP") {
                    payload = [
                        { "queue": queueSS },
                        { "channels": channels },
                        { "customerId": customerId },
                        { "agentEmail": agentEmail },
                        { "origin": scalationType },
                        { "conversationId": conversationId },
                        { "tags": ["61d5e7295d44c9faff6e7b28"] },
                        { "idGuia": idGuia },
                        { "idcompany": idcompany },
                        { "marca": marca },
                        { "form": form },
                        { "scalationReason": scalationReason },
                        { "slaMessage": slaMessage },
                        { "scalationReasonId": scalationReasonId },
                        { "sla": sla },
                        { "conversationName": scalationReason },
                        { "asuntoEmail": asuntoEmail },
                        { "userEmail": userEmail },
                        { "interProfile": "66df6ab011fda41b2b4accc8" },
                        { "fromPostmark": "clientes@mailcom" },
                        { "interNote": `Agent scalated: ${agentEmail}\nScalation Type: ${scalationType}\nScalation reason: ${scalationReason}\nPaís: ${country}\nNombre de la marca: ${marca}\nID Guía: ${idGuia}\nID MiPaquete: ${guiaMiPaquete}\nTransportadora: ${transportadora}\nComments: ${description}\nOriginal Conversation:` + " " + "app.com/app/conversations/" + conversationId },
                        { "country": country },
                        { "teamSS": "66e041ffca4bc54724b39f2f" },
                        { "miPaquete": "clientes@mail.com" }
                    ]
                }

                let callHook = () => {
                    this.ajax(payload, "submit")
                        .then(() => {
                            this.setState({
                                success: true,
                                submitting: false,
                                error: false,
                                errorMessage: null
                            });
                        })
                        .catch(err => {
                            console.log(err)
                            this.setState({
                                submitting: false,
                                error: true,
                                errorMessage: "Something went wrong submitting this message. Please refresh the page and try again."
                            });
                        });
                }; callHook();
            };

            renderCommentAttachment() {
                return (
                    <>
                        <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Comentarios adicionales</p>
                        <textarea
                            style={{ width: '95%', height: '70px' }}
                            onChange={e => this.setField("description", e.target.value)}
                            onPaste={e => e.clipboardData.getData('Text') ?
                                ""
                                :
                                this.setField("attachments", e.clipboardData.files[0])
                            }
                            required
                        />
                        <input
                            id="attachments"
                            multiple
                            type="file"
                            hidden
                            onChange={e => this.setField("attachments", e.target.files[0])}
                        />
                        <label
                            style={{ border: "solid 1px black", margin: "0px 5px" }}
                            htmlFor="attachments">Adjunto
                        </label>
                        {this.state.attachedFiles /* si quieres usar aquí, o pasar como prop */}
                        <footer>
                            <button
                                style={{ height: '32px', padding: '0 8px', color: 'white', backgroundColor: '#0A8904', border: 'solid 1pt', borderRadius: '15px', cursor: 'pointer' }}
                                className="button__base___2IzXF button__medium___2Rm1N buttonPrimary__primary___2HJU4"
                                type="submit"
                                value="Submit"
                                onClick={() => this.setField("type", "userTeams")}>Enviar</button>
                        </footer>
                    </>
                )
            }

            renderForm() {
                const {
                    attachments
                } = this.state;

                let attachedFiles = null;

                if (attachments.length > 0) {
                    attachedFiles =
                        <div style={{ 'marginBottom': '10px' }}>
                            {attachments.map(file => (
                                <li className="upload-item" key={file.name}>
                                    <a className="upload-link"
                                        style={{ color: 'black', marginRight: '4px' }}>{file.name}</a>
                                    <span
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => this.removeAttachmentFile(file.name)}
                                        className="upload-remove">❌</span>
                                </li>
                            ))}
                        </div>
                };
                switch (this.state.form) {
                    case "Supply":
                        const queuesSupply = (country) => ({
                            co: "67d861faf47c94fe835bb7a2",
                            mx: "67dac9d7d0ce4d071d6f6045",
                            ar: "67dac9cde6f3d80c87c8b8f7"
                        }[country] || "defaultValue");
                        const queuesProgs = (country) => ({
                            co: "67dac9a5a6853fb9d58a1d76",
                            mx: "67dac9bbe5c1803212d91129",
                            ar: "67dac9b0554fb8a9427f2c9d"
                        }[country] || "defaultValue");

                        const fieldConfigMap = {
                            // Primer grupo
                            "supply.bonificaciones": [
                                { label: "Nombre Aliado", field: "aliadoName" },
                                { label: "Cédula/Identificación", field: "aliadoIdentification" },
                                { label: "Ciudad en la que opera el aliado:", field: "city" }
                            ],
                            "supply.confirmacion_pagos_disponibilidad": [
                                { label: "Nombre Aliado", field: "aliadoName" },
                                { label: "Cédula/Identificación", field: "aliadoIdentification" },
                                { label: "Ciudad en la que opera el aliado:", field: "city" }
                            ],
                            "supply.confirmacion_pagos_dedicados": [
                                { label: "Nombre Aliado", field: "aliadoName" },
                                { label: "Cédula/Identificación", field: "aliadoIdentification" },
                                { label: "Ciudad en la que opera el aliado:", field: "city" }
                            ],
                            "supply.demora_aprobacion_documentos_aliado": [
                                { label: "Nombre Aliado/Proveedor", field: "aliadoName" },
                                { label: "Cédula/Identificación", field: "aliadoIdentification" },
                                { label: "Ciudad en la que opera el aliado:", field: "city" }
                            ],
                            "supply.cambios_documentosDatosVehiculo_aliado": [
                                { label: "Nombre Aliado/Proveedor", field: "aliadoName" },
                                { label: "Cédula/Identificación", field: "aliadoIdentification" },
                                { label: "Ciudad en la que opera el aliado:", field: "city" }
                            ],
                            "supply.demora_aprobacion_documentos_vehiculo": [
                                { label: "Nombre Aliado/Proveedor", field: "aliadoName" },
                                { label: "Cédula/Identificación", field: "aliadoIdentification" },
                                { label: "Ciudad en la que opera el aliado:", field: "city" }
                            ],
                            "supply.cortes_adicionales_petcomx": [
                                { label: "Nombre de la tienda", field: "storeName" },
                                { label: "Cortes // horarios", field: "scheduleCuts" }
                            ],
                            "supply.driver_adicional_petcomx": [
                                { label: "Nombre de la tienda", field: "storeName" },
                                { label: "Cantidad drivers solicitados", field: "driverCount" },
                                { label: "Fecha de inicio", field: "startDate", type: "date" }
                            ],
                            "supply.quejas_reclamaciones_petcomx": [
                                { label: "Nombre de la tienda", field: "storeName" },
                                { label: "Nombre del aliado / proveedor", field: "providerName" },
                                { label: "Identificación", field: "providerId" }
                            ],
                            "supply.asignar_aliado1": [
                                { label: "Nombre de la marca", field: "brandName" },
                                { label: "Id Guía", field: "idGuia" },
                                { label: "Id Ruta", field: "idRuta" }
                            ],
                            "supply.demora_recoleccion_aliado_no_contesta1": [
                                { label: "Nombre de la marca", field: "brandName" },
                                { label: "Id Guía", field: "idGuia" },
                                { label: "Id Ruta", field: "idRuta" }
                            ]
                        };
                        return (
                            <React.Fragment>
                                <h3 className="form-title">Supply</h3>
                                <hr />
                                <div className="form">
                                    <form
                                        onSubmit={this.handleSubmit.bind(this)}
                                        className="request-form"
                                        id="payments"
                                    >
                                        <div className="form-group form-group-pair">
                                            <ReusableSelectMarcaPais
                                                label="Selecciona el país:"
                                                options={optionsCountries}
                                                value={this.state.country}
                                                onChange={e => (this.setField("country", e.target.value))}
                                                style={{ width: '95%' }}
                                                required
                                            />
                                            <p style={{ margin: 0, marginBottom: '5px', marginTop: '5px' }}>Selecciona la razón de escalamiento</p>
                                            <select
                                                style={{ width: '95%' }}
                                                required
                                                id="scalationReasonEntes"
                                                value={this.state.scalationReason}
                                                onChange={e => {
                                                    const selectedOption = e.target.options[e.target.selectedIndex];
                                                    this.setField("scalationReason", e.target.value),
                                                        this.setField("scalationReasonId", selectedOption.getAttribute("data-sn")),
                                                        this.setField("scalationType", selectedOption.getAttribute("data-ts")),
                                                        this.setField("queueSS", selectedOption.getAttribute("data-qss")),
                                                        this.setField("sla", `${selectedOption.getAttribute("data-sla")}-${selectedOption.getAttribute("data-unit")}`),
                                                        this.typingMessage(selectedOption.getAttribute("data-sla"), selectedOption.getAttribute("data-unit"), selectedOption.getAttribute("value"));
                                                }}>
                                                <option hidden selected value=""> - </option>
                                                <option value="Bonificaciones" data-sn="supply.bonificaciones" data-qss={queuesProgs(this.state.country)} data-ts="intern" data-sla="24" data-unit="h">Bonificaciones</option>
                                                <option value="Confirmación de pagos por disponibilidad" data-sn="supply.confirmacion_pagos_disponibilidad" data-qss={queuesProgs(this.state.country)} data-ts="intern" data-sla="24" data-unit="h">Confirmación de pagos por disponibilidad</option>
                                                <option value="Confirmación de pagos por dedicados" data-sn="supply.confirmacion_pagos_dedicados" data-qss={queuesProgs(this.state.country)} data-ts="intern" data-sla="24" data-unit="h">Confirmación de pagos por dedicados</option>
                                                <option value="Asignar aliado (No se logró asignar desde CX)" data-sn="supply.asignar_aliado1" data-qss={queuesProgs(this.state.country)} data-ts="intern" data-sla="1" data-unit="h">Asignar aliado (No se logró asignar desde CX)</option>
                                                <option value="Demora en recolección de paquetes (Aliado no contesta)" data-sn="supply.demora_recoleccion_aliado_no_contesta1" data-qss={queuesProgs(this.state.country)} data-ts="intern" data-sla="1" data-unit="h">Demora en recolección de paquetes (Aliado no contesta)</option>
                                                <option value="Demora en la aprobación de documentos aliado" data-sn="supply.demora_aprobacion_documentos_aliado" data-qss={queuesSupply(this.state.country)} data-ts="intern" data-sla="24" data-unit="h">Demora en la aprobación de documentos aliado</option>
                                                <option value="Cambios en los documentos / datos / vehiculo del aliado " data-sn="supply.cambios_documentosDatosVehiculo_aliado" data-qss={queuesSupply(this.state.country)} data-ts="intern" data-sla="24" data-unit="h">Cambios en los documentos / datos  / vehiculo del aliado </option>
                                                <option value="Demora en la aprobación de documentos vehiculos" data-sn="supply.demora_aprobacion_documentos_vehiculo" data-qss={queuesSupply(this.state.country)} data-ts="intern" data-sla="24" data-unit="h">Demora en la aprobación de documentos vehiculos</option>
                                                <option value="Demora en la creación de proveedor" data-sn="supply.demora_creacion_proveedor" data-qss={queuesSupply(this.state.country)} data-ts="intern" data-sla="24" data-unit="h">Demora en la creación de proveedor</option>
                                                <option value="Actualización de horarios company Point" data-sn="supply.actualizacion_horario_companypoint" data-qss={queuesSupply(this.state.country)} data-ts="intern" data-sla="24" data-unit="h">Actualización de horarios company Point</option>
                                                <option value="Demora en la aprobación company Point" data-sn="supply.demora_aprobacion_companypoint" data-qss={queuesSupply(this.state.country)} data-ts="intern" data-sla="24" data-unit="h">Demora en la aprobación company Point</option>
                                                <option value="Actualización de datos company Point" data-sn="supply.actualizacion_datos_companypoint" data-qss={queuesSupply(this.state.country)} data-ts="intern" data-sla="24" data-unit="h">Actualización de datos company Point</option>
                                                <option value="Cortes adicionales Petco MX" data-sn="supply.cortes_adicionales_petcomx" data-qss={queuesSupply(this.state.country)} data-ts="intern" data-sla="7" data-unit="d">Cortes adicionales Petco MX</option>
                                                <option value="Driver adicional Petco Mx" data-sn="supply.driver_adicional_petcomx" data-qss={queuesSupply(this.state.country)} data-ts="intern" data-sla="7" data-unit="d">Driver adicional Petco Mx</option>
                                                <option value="Quejas/Reclamaciones Petco MX" data-sn="supply.quejas_reclamaciones_petcomx" data-qss={queuesSupply(this.state.country)} data-ts="intern" data-sla="24" data-unit="h">Quejas/ reclamaciones Petco MX</option>
                                            </select>

                                            {fieldConfigMap[this.state.scalationReasonId] && (
                                                <React.Fragment>
                                                    {fieldConfigMap[this.state.scalationReasonId].map(input => (
                                                        <React.Fragment key={input.field}>
                                                            <p style={{ margin: 0, marginBottom: '10px', marginTop: '5px' }}>{input.label}</p>
                                                            <input
                                                                type={input.type || "text"}
                                                                value={this.state[input.field] || ""}
                                                                style={{ width: '95%' }}
                                                                onChange={e => this.setField(input.field, e.target.value)}
                                                                required
                                                            />
                                                        </React.Fragment>
                                                    ))}
                                                </React.Fragment>
                                            )}
                                            {this.renderCommentAttachment()}
                                        </div>
                                    </form>
                                </div>
                            </React.Fragment>
                        );
                    case "Operaciones":
                        const queuesOps = (country) => ({
                            co: "",
                            mx: "",
                            ar: ""
                        }[country] || "defaultValue");
                        return (
                            <React.Fragment>
                                <h3 className="form-title">Operaciones</h3><hr />
                                <div className="form">
                                    <form
                                        onSubmit={this.handleSubmit.bind(this)}
                                        className="request-form"
                                        id="payments">
                                        <div className="form-group form-group-pair">
                                            <ReusableSelectMarcaPais
                                                label="Selecciona el país:"
                                                options={optionsCountries}
                                                value={this.state.country}
                                                onChange={e => (this.setField("country", e.target.value))}
                                                style={{ width: '95%' }}
                                            />
                                            <p style={styles.formSubtitle}>Selecciona la razón de escalamiento</p>
                                            <select
                                                style={{ width: '95%' }}
                                                required
                                                id="scalationReasonEntes"
                                                value={this.state.scalationReason}
                                                onChange={e => (this.setField("scalationReason", e.target.value),
                                                    this.setField("scalationReasonId", e.target.options[e.target.options.selectedIndex].getAttribute("data-sn")),
                                                    this.setField("scalationType", e.target.options[e.target.options.selectedIndex].getAttribute("data-ts")),
                                                    this.setField("queueSS", e.target.options[e.target.options.selectedIndex].getAttribute("data-qss")),
                                                    this.setField("sla", `${e.target.options[e.target.options.selectedIndex].getAttribute("data-sla")}-${e.target.options[e.target.options.selectedIndex].getAttribute("data-unit")}`),
                                                    this.typingMessage(e.target.options[e.target.options.selectedIndex].getAttribute("data-sla"), e.target.options[e.target.options.selectedIndex].getAttribute("data-unit"), e.target.options[e.target.options.selectedIndex].getAttribute("value")))}>
                                                <option hidden selected value=""> - </option>
                                                <option value="Confirmación de trazabilidad real" data-sn="operations.confirmacion_trazabilidad_real" data-qss={this.state.country === "co" ? "65142c79280b049d4a58f2e4" : "65142d1f27dad64e3601fcee"} data-ts="intern" data-sla={this.state.country === "mx" ? "24" : "12"} data-unit="h">Confirmación de trazabilidad real</option>
                                                <option value="Confirmación de paquete extraviado en bodega" data-sn="operations.confirmacion_paquete_extraviado_bodega" data-qss={this.state.country === "co" ? "65142c79280b049d4a58f2e4" : "65142d1f27dad64e3601fcee"} data-ts="intern" data-sla={this.state.country === "mx" ? "24" : "12"} data-unit="h">Confirmación de paquete extraviado en bodega</option>
                                                <option value="Confirmación de ingreso a company (Primera Milla)" data-sn="operations.confirmacion_ingreso_company_primeraMilla" data-qss={this.state.country === "co" ? "65142c79280b049d4a58f2e4" : "65142d5b459c0c855c9fb226"} data-ts="intern" data-sla={this.state.country === "mx" ? "24" : "12"} data-unit="h">Confirmación de ingreso a company (Primera Milla)</option>
                                                <option value="Demoras en el despacho" data-sn="operations.demoras_despacho" data-qss={this.state.country === "co" ? "65142c79280b049d4a58f2e4" : "65142d1f27dad64e3601fcee"} data-ts="intern" data-sla="12" data-unit="h">Demoras en el despacho</option>
                                                <option value="Demora en la colecta" data-sn="operations.demora_colecta" data-qss={this.state.country === "co" ? "65142c79280b049d4a58f2e4" : "65142d5b459c0c855c9fb226"} data-ts="intern" data-sla={this.state.country === "mx" ? "6" : "1"} data-unit="h">Demora en la colecta</option>
                                                <option value="El aliado no pasó a retirar los paquetes" data-sn="operations.aliado_no_paso_a_retirar_paquete" data-qss={this.state.country === "co" ? "65142c79280b049d4a58f2e4" : "65142d5b459c0c855c9fb226"} data-ts="intern" data-sla={this.state.country === "mx" ? "6" : "1"} data-unit="h">El aliado no pasó a retirar los paquetes</option>
                                                {this.state.country === "ar" ? <option value="Paquete en tránsito" data-sn="operations.paquete_en_transito_" data-qss="65142d5b459c0c855c9fb226" data-ts="intern" data-sla="1" data-unit="h">Paquete en tránsito</option> : ""}
                                            </select>

                                            <ReusableSelectMarcaPais
                                                label="Seleccione la Marca:"
                                                options={optionsMarca}
                                                value={this.state.marca}
                                                onChange={e => (this.setField("marca", e.target.value))}
                                                style={{ width: '95%' }}
                                            />
                                            <p style={styles.formSubtitle}>Id Guía</p>
                                            <input
                                                value={this.state.idGuia}
                                                type="text"
                                                style={{ width: '95%' }}
                                                onChange={e => this.setField("idGuia", e.target.value)}
                                                required
                                            />
                                            <p style={styles.formSubtitle}>Id Hoja de ruta</p>
                                            <input
                                                value={this.state.idRuta}
                                                type="text"
                                                style={{ width: '95%' }}
                                                onChange={e => this.setField("idRuta", e.target.value)}
                                                required />
                                            <p style={styles.formSubtitle}>Ciudad</p>
                                            <input
                                                value={this.state.city}
                                                type="text"
                                                style={{ width: '95%' }}
                                                onChange={e => this.setField("city", e.target.value)}
                                                required
                                            />
                                            {
                                                this.state.scalationReasonId === "operations.confirmacion_ingreso_company_primeraMilla" ?
                                                    <React.Fragment>
                                                        <p style={styles.formSubtitle}>Fecha del estado validado</p>
                                                        <input
                                                            value={this.state.date}
                                                            type="date"
                                                            style={{ width: '95%' }}
                                                            onChange={e => this.setField("date", e.target.value)}
                                                            required
                                                        />
                                                    </React.Fragment>
                                                    :
                                                    ""
                                            }
                                            {
                                                this.state.scalationReasonId === "operations.demoras_despacho" ?
                                                    <React.Fragment>
                                                        <p style={styles.formSubtitle}>Fecha ingreso al HUB</p>
                                                        <input
                                                            value={this.state.date}
                                                            type="date"
                                                            style={{ width: '95%' }}
                                                            onChange={e => this.setField("date", e.target.value)}
                                                            required
                                                        />
                                                    </React.Fragment>
                                                    :
                                                    ""
                                            }
                                            <p style={styles.formSubtitle}>Comentarios adicionales</p>
                                            <textarea
                                                style={{ width: '95%', height: '70px' }}
                                                onChange={e => this.setField("description", e.target.value)}
                                                onPaste={e => e.clipboardData.getData('Text') ?
                                                    ""
                                                    :
                                                    this.setField("attachments", e.clipboardData.files[0])}
                                                required
                                            />
                                            <input
                                                id="attachments"
                                                multiple
                                                type="file"
                                                hidden
                                                onChange={e => this.setField("attachments", e.target.files[0])}
                                            />
                                            <label style={{ border: "solid 1px black", margin: "0px 5px" }} htmlFor="attachments">Adjunto</label>


                                        </div>
                                        {attachedFiles}
                                        <footer>
                                            <button
                                                style={{ height: '32px', padding: '0 8px', color: 'white', backgroundColor: '#0A8904', border: 'solid 1pt', borderRadius: '15px', cursor: 'pointer' }}
                                                className="button__base___2IzXF button__medium___2Rm1N buttonPrimary__primary___2HJU4"
                                                type="submit"
                                                value="Submit"
                                                onClick={() => this.setField("type", "userTeams")}>Enviar
                                            </button>
                                        </footer>
                                    </form>
                                </div>
                            </React.Fragment>
                        );
                    default:
                        return (<p>Selecciona un formulario</p>);
                };
            };
            render() {
                const { success, submitting, error, resultJson, totalConvos, type } = this.state;
                if (error) {
                    return <p>Error</p>
                }
                if (submitting) {/* Use this below copy to customize your success message*/
                    return (
                        <div width="100%">
                            <img align="center" width="100%" src="https://i.pinimg.com/originals/98/64/9a/98649add72e05e3cc1b8ae0e6f553c8e.gif" alt="loading" />
                        </div>
                    )
                }
                if (success) {/* Use this below copy to customize your success message*/
                    return <p>Creado correctamente</p>
                } if (this.state.conversationSecundary && _.get(conversation, 'tags').includes("61d5e7315ac61305eabc34b7")) {
                    const { attachments } = this.state;
                    let attachedFiles = null;
                    if (attachments.length > 0) {
                        attachedFiles = <div style={{ 'marginBottom': '10px' }}>
                            {
                                attachments.map(file => (
                                    <li className="upload-item" key={file.name}>
                                        <a className="upload-link" style={{ color: 'black', marginRight: '4px' }}>{file.name}</a>
                                        <span style={{ cursor: 'pointer' }}
                                            onClick={() => this.removeAttachmentFile(file.name)}
                                            className="upload-remove">❌
                                        </span>
                                    </li>
                                )
                                )
                            }
                        </div>
                    };
                    if (this.state.scalatedConversationMessages && this.state.scalatedConversation) {
                        return (
                            <div>
                                <div style={{ fontSize: "12px", overflowY: "scroll", height: "300px" }}>
                                    <table width="100%">
                                        <thead>
                                            <tr>
                                                <th style={{ position: "sticky", display: "flex", top: "0", backgroundColor: "#eee" }}>
                                                    <div style={{ width: "85%" }}>Status: {this.state.scalatedConversation.attributes.status} - Escalamiento: {this.state.scalatedConversation.attributes.custom.scalationFormStr}
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.scalatedConversationMessages.filter(conversation => conversation.attributes.preview != "").map(conversation => {
                                                    if (conversation.attributes.direction === "in") {
                                                        return (
                                                            <tr valign="top">
                                                                <td style={{ borderTop: "1px solid #b9bbbd" }} width="100%">
                                                                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td >
                                                                                    <p style={{ color: "#8c8b8b" }}>{conversation.attributes.createdAt.split(".")[0].replace("T", "  ")}
                                                                                    </p>
                                                                                    <p style={{ marginBottom: "5px", whiteSpace: "pre-wrap", wordBreak: "break-all" }}>{conversation.attributes.preview}
                                                                                    </p>{conversation.relationships.hasOwnProperty("attachments") ? conversation.relationships.attachments.data.map(file => <a href={`https://app.api.com/v1/messages/${conversation.id}/attachments/${file.id}?redirect=true`} target="_blank" alt="adjunto"><img src="https://cdn.01c07f33f4ee92cd601cc7322913b93.png" style={{ width: "25px" }} /></a>) : ""}
                                                                                </td>
                                                                                <td style={{ width: "40px", verticalAlign: "top" }}>
                                                                                    <img style={{ marginTop: "5px", borderRadius: "50%" }} src="https://17b/472516a3d5d7730d77cf3e5678b45d5e.png" alt="" height="40px" width="40px" />
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        );
                                                    } else {
                                                        return (
                                                            <tr valign="top">
                                                                <td style={{ borderTop: "1px solid #b9bbbd" }} width="100%">
                                                                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td style={{ width: "40px", verticalAlign: "top" }}>
                                                                                    <img style={{ marginTop: "5px", borderRadius: "50%" }} src="https://6917b/ba85c92469d237bfbc82d9f16e9deea2.png" alt="" height="40px" width="40px" />
                                                                                </td>
                                                                                <td>
                                                                                    <p style={{ color: "#8c8b8b" }}>
                                                                                        {conversation.attributes.createdAt.split(".")[0].replace("T", "  ")}
                                                                                    </p>
                                                                                    <p style={{ marginBottom: "5px", whiteSpace: "pre-wrap", wordBreak: "break-all" }}>
                                                                                        {conversation.attributes.preview}
                                                                                    </p>
                                                                                    {conversation.relationships.hasOwnProperty("attachments") ? conversation.relationships.attachments.data.map(file => <a href={`https://app.api.com/v1/messages/${conversation.id}/attachments/${file.id}?redirect=true`} target="_blank" alt="adjunto"><img src="https://07f33f4ee92cd601cc7322913b93.png" style={{ width: "25px" }} />
                                                                                    </a>
                                                                                    ) : ""
                                                                                    }
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        );
                                                    };
                                                })}</tbody>
                                    </table>
                                </div>
                                <div style={{ marginTop: "5px" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <input
                                            style={{ width: '95%', border: "none", borderButton: "2px solid #eee" }}
                                            type="text"
                                            id="bodyMessage"
                                            placeholder="Send a message..."
                                            required
                                        />
                                        <label
                                            style={{ width: "44px", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", height: "26px" }}
                                            htmlFor="attachments">📎
                                        </label>
                                        <button
                                            type="submit"
                                            value="Submit"
                                            style={{ border: "none", width: "80px", textAlign: "center", backgroundColor: "#19a5e4", color: "white", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}
                                            onClick={() => { this.sendMessage() }}>Send
                                        </button>
                                        <input style={{ display: "none" }} id="attachments" label="Attachment"
                                            className="form-field form-field-attachment" hint="Add file here" type="file"
                                            onChange={e => this.setField("attachments", e.target.files[0])} name="file1"
                                        />
                                    </div>{attachedFiles}
                                </div>
                            </div>
                        );
                    }; return <p>Cargando...</p>
                }; return (
                    <div>
                        <select style={{ width: '95%', "margin-top": "15px" }}
                            onChange={e => this.setField("form", e.target.value)}
                            id="forms">
                            <option disabled hidden selected value="default"> -- select an option --
                            </option>
                            {this.includesTeam()}
                        </select>
                        {this.renderForm()}
                    </div>);
            };
        } return React.createElement(searcheBugs, {});
    })() : <div style={{ padding: '10px' }}><p>You don't have access</p></div>
    }
</div>