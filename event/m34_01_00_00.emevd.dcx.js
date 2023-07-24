// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    DarkSouls3
// @string    N:\FDP\data\Param\event\common_func.emevd       
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

//---------------------------------------------
// Constructor
//---------------------------------------------
$Event(0, Default, function() {
    // Bonfires - Skip if in Flameless
    if (!EventFlag(25000141)) {
        RegisterBonfire(13410000, 3411950, 5, 180, 0); // Twin Princes
        RegisterBonfire(13410001, 3411951, 5, 180, 0); // Grand Archives Rooftop
    } else {
        DeactivateObject(3411950, Disabled);
        DeactivateObject(3411951, Disabled);
    }

    InitializeCommonEvent(20005780, 3411750, 2);
    InitializeCommonEvent(20005780, 3411751, 3);

    //----------------------
    // Phantoms
    //----------------------
    InitializeEvent(0, 13417000, 0);

    //----------------------
    // Spell Summons
    //----------------------
    InitializeEvent(0, 13417100, 0);

    // Summon - Sirris of the Sunless Realms
    InitializeCommonEvent(20005700, 13410830, 13414190, 13415190, 3410190, 3412715);
    InitializeCommonEvent(20005711, 13414190, 13415835, 3410190, 3412831, 3412810, 13410831);
    InitializeCommonEvent(20005720, 13414190, 13415190, 13410830, 3410190);
    InitializeCommonEvent(20005714, 13414190, 13415835, 3410190, 3412811, 13410831);

    // Summon - Orbeck of Vinheim
    InitializeCommonEvent(20005700, 13410830, 13414191, 13415191, 3410191, 3412720);
    InitializeCommonEvent(20005711, 13414191, 13415835, 3410191, 3412831, 3412810, 13410831);
    InitializeCommonEvent(20005720, 13414191, 13415191, 13410830, 3410191);
    InitializeCommonEvent(20005714, 13414191, 13415835, 3410191, 3412811, 13410831);

    //----------------------------------------
    // Mirror Knight
    //----------------------------------------
    InitializeEvent(0, 13415850, 0); // Mirror Knight - Setup
    InitializeEvent(0, 13415851, 0); // Mirror Knight - Kill
    InitializeEvent(0, 13415852, 0); // Mirror Knight - Fogwalls
    InitializeEvent(0, 13415853, 0); // Mirror Knight - Invalidation
    InitializeEvent(0, 13415854, 0); // Mirror Knight - Mirror Phantoms

    InitializeCommonEvent(20005110, 3410220, 3412491);
    InitializeCommonEvent(20005110, 3410221, 3412492);
    InitializeCommonEvent(20005202, 3410250, 30000, 20004, 3412560);
    InitializeCommonEvent(20005132, 3410251, 1092616192, 3412561);
    InitializeCommonEvent(20005202, 3410252, 30000, 20003, 3412562);
    InitializeCommonEvent(20005202, 3410253, 30000, 20003, 3412563);
    InitializeCommonEvent(20005205, 3410302, 700, 1700, 3412530, 0);
    InitializeCommonEvent(20005205, 3410303, 700, 1700, 3412530, 1056964608);
    InitializeCommonEvent(20005205, 3410304, 701, 1701, 3412430, 0);
    InitializeCommonEvent(20005205, 3410305, 701, 1701, 3412430, 1056964608);
    InitializeCommonEvent(20005202, 3410308, 701, 1701, 3412470);
    InitializeCommonEvent(20005214, 3410309, 701, 1701, 1077936128);
    InitializeCommonEvent(20005214, 3410310, 701, 1701, 1077936128);
    InitializeCommonEvent(20005214, 3410311, 701, 1701, 1077936128);
    InitializeCommonEvent(20005202, 3410313, 701, 1701, 3412421);
    InitializeCommonEvent(20005202, 3410314, 701, 1701, 3412405);
    InitializeCommonEvent(20005202, 3410315, 701, 1701, 3412405);
    InitializeCommonEvent(20005120, 3410316, 1090519040);
    InitializeCommonEvent(20005111, 3410350, 3002, 3412580);
    InitializeCommonEvent(20005202, 3410351, 700, 1700, 3412580);
    InitializeCommonEvent(20005224, 3410400, 700, 1700);
    InitializeCommonEvent(20005224, 3410401, 700, 1700);
    InitializeCommonEvent(20005224, 3410402, 702, 1702);
    InitializeCommonEvent(20005224, 3410405, 700, 1700);
    InitializeCommonEvent(20005224, 3410406, 702, 1702);
    InitializeEvent(0, 13415450, 3410500, 3020, 1056964608);
    InitializeEvent(1, 13415450, 3410501, 3020, 1061997773);
    InitializeEvent(2, 13415450, 3410502, 3026, 0);
    InitializeEvent(0, 13410300, 0); // Winged Knights - Titanite Slab
    InitializeCommonEvent(20005110, 3410600, 3412510);
    InitializeCommonEvent(20005110, 3410601, 3412480);
    InitializeCommonEvent(20005110, 3410603, 3412480);
    InitializeEvent(0, 13415350, 3410200);
    InitializeEvent(0, 13415351, 3410200, 3412780, 3412781, 3412782, 3412783, 3412784, 3412790, 3412791, 3412792, 3412793);
    InitializeEvent(0, 13415355, 3410200);

    InitializeCommonEvent(20005120, 3410372, 1084227584);
    InitializeCommonEvent(20005120, 3410374, 1084227584);
    InitializeCommonEvent(20005120, 3410375, 1084227584);

    //----------------------------------------
    // Twin Princes
    //----------------------------------------
    InitializeEvent(0, 13415830, 0); // Phase 1 - Setup
    InitializeEvent(0, 13415840, 0); // Prince Lothric - Gravity/Animation State
    InitializeEvent(0, 13415841, 0); // Warp Prince Lothric to Prince Lorian
    InitializeEvent(0, 13415831, 0); // Phase 2 - Setup
    InitializeEvent(0, 13410832, 0); // Kill
    InitializeEvent(0, 13415833, 0); // Common Setup
    InitializeEvent(0, 13415843, 0); // Prince Lothric - Talk/Animation
    InitializeEvent(0, 13415845, 0); // Camera Setup

    // Lifts
    InitializeCommonEvent(20005624, 13410450, 13410452, 3411450, 3411451, 3411452, 13411450);
    InitializeCommonEvent(20005628, 13410451, 3411452, 3412451);
    InitializeEvent(0, 13415400, 0);
    InitializeCommonEvent(20005622, 13410460, 13410462, 3411460, 3411461, 3411462, 13411460);
    InitializeEvent(0, 13415410, 0);
    InitializeCommonEvent(20005613, 13410595, 13411605, 3411400, 340330, 10010874);
    InitializeEvent(0, 13415490, 13410510, 3411470, 3411471, 342200, 13411604);
    InitializeEvent(1, 13415490, 13410512, 3411474, 3411475, 342200, 13411607);
    InitializeEvent(2, 13415490, 13410513, 3411476, 3411477, 342200, 13411608);
    InitializeEvent(0, 13415495, 13410511, 3411472, 3411478, 3411473, 342200, 13411606);

    InitializeEvent(0, 13415440, 0);
    RegisterLadder(13415150, 13415151, 3411430);
    RegisterLadder(13415152, 13415153, 3411431);
    RegisterLadder(13415154, 13415155, 3411432);
    RegisterLadder(13415156, 13415157, 3411433);
    RegisterLadder(13415158, 13415159, 3411434);
    RegisterLadder(13415164, 13415165, 3411437);
    InitializeCommonEvent(20005640, 13410520, 3411435, 13415160, 13415161);
    InitializeCommonEvent(20005640, 13410521, 3411436, 13415162, 13415163);
    InitializeEvent(0, 13415430, 0);
    InitializeEvent(0, 13417500, 3411650, 3411500, 0, 1, 2, 3, 1077936128, 13417300, 13416300);
    InitializeEvent(1, 13417500, 3411650, 3411501, 10, 11, 12, 13, 1077936128, 13417301, 13416301);
    InitializeEvent(28, 13417500, 3411650, 3411528, 0, 1, 2, 3, 1077936128, 13417328, 13416328);
    InitializeEvent(29, 13417500, 3411650, 3411529, 10, 11, 12, 13, 1077936128, 13417329, 13416329);
    InitializeEvent(30, 13417500, 3411650, 3411530, 0, 1, 2, 3, 1077936128, 13417330, 13416330);
    InitializeEvent(31, 13417500, 3411650, 3411531, 10, 11, 12, 13, 1077936128, 13417331, 13416331);
    InitializeEvent(32, 13417500, 3411650, 3411532, 0, 1, 2, 3, 1077936128, 13417332, 13416332);
    InitializeEvent(33, 13417500, 3411650, 3411533, 10, 11, 12, 13, 1080033280, 13417333, 13416333);
    InitializeEvent(34, 13417500, 3411650, 3411534, 0, 1, 2, 3, 1077936128, 13417334, 13416334);
    InitializeEvent(35, 13417500, 3411650, 3411535, 10, 11, 12, 13, 1077936128, 13417335, 13416335);
    InitializeEvent(36, 13417500, 3411650, 3411536, 0, 1, 2, 3, 1077936128, 13417336, 13416336);
    InitializeEvent(37, 13417500, 3411650, 3411537, 10, 11, 12, 13, 1077936128, 13417337, 13416337);
    InitializeEvent(38, 13417500, 3411650, 3411538, 10, 11, 12, 13, 1077936128, 13417338, 13416338);
    InitializeEvent(39, 13417500, 3411650, 3411539, 0, 1, 2, 3, 1077936128, 13417339, 13416339);
    InitializeEvent(40, 13417500, 3411650, 3411540, 10, 11, 12, 13, 1077936128, 13417340, 13416340);
    InitializeEvent(41, 13417500, 3411650, 3411541, 0, 1, 2, 3, 1077936128, 13417341, 13416341);
    InitializeEvent(42, 13417500, 3411650, 3411542, 10, 11, 12, 13, 1080033280, 13417342, 13416342);
    InitializeEvent(43, 13417500, 3411650, 3411543, 0, 1, 2, 3, 1080033280, 13417343, 13416343);
    InitializeEvent(44, 13417500, 3411650, 3411544, 10, 11, 12, 13, 1077936128, 13417344, 13416344);
    InitializeEvent(27, 13417600, 3411650, 3411625, 0, 1, 2, 3, 1077936128, 13417427, 13416427);
    InitializeEvent(28, 13417600, 3411650, 3411626, 10, 11, 12, 13, 1077936128, 13417428, 13416428);
    InitializeEvent(29, 13417600, 3411650, 3411627, 0, 1, 2, 3, 1077936128, 13417429, 13416429);
    InitializeEvent(30, 13417600, 3411650, 3411628, 10, 11, 12, 13, 1077936128, 13417430, 13416430);
    InitializeEvent(31, 13417600, 3411650, 3411629, 0, 1, 2, 3, 1077936128, 13417431, 13416431);
    InitializeEvent(32, 13417600, 3411650, 3411630, 10, 11, 12, 13, 1077936128, 13417432, 13416432);
    InitializeEvent(33, 13417600, 3411650, 3411631, 0, 1, 2, 3, 1077936128, 13417433, 13416433);
    InitializeEvent(34, 13417600, 3411650, 3411632, 10, 11, 12, 13, 1077936128, 13417434, 13416434);
    InitializeEvent(6, 13417500, 3411652, 3411506, 0, 1, 2, 3, 1083179008, 13417306, 13416306);
    InitializeEvent(10, 13417500, 3411652, 3411510, 0, 1, 2, 3, 1083179008, 13417310, 13416310);
    InitializeEvent(46, 13417500, 3411652, 3411546, 0, 1, 2, 3, 1083179008, 13417346, 13416346);
    InitializeEvent(47, 13417500, 3411652, 3411547, 20, 21, 22, 23, 1069547520, 13417347, 13416347);
    InitializeEvent(48, 13417500, 3411652, 3411548, 0, 1, 2, 3, 1083179008, 13417348, 13416348);
    InitializeEvent(51, 13417500, 3411652, 3411551, 20, 21, 22, 23, 1069547520, 13417351, 13416351);
    InitializeEvent(52, 13417500, 3411652, 3411552, 0, 1, 2, 3, 1083179008, 13417352, 13416352);
    InitializeEvent(53, 13417500, 3411652, 3411553, 0, 1, 2, 3, 1083179008, 13417353, 13416353);
    InitializeEvent(54, 13417500, 3411652, 3411554, 0, 1, 2, 3, 1083179008, 13417354, 13416354);
    InitializeEvent(55, 13417500, 3411652, 3411555, 20, 21, 22, 23, 1069547520, 13417355, 13416355);
    InitializeEvent(12, 13417500, 3411653, 3411512, 0, 1, 2, 3, 1083179008, 13417312, 13416312);
    InitializeEvent(13, 13417500, 3411653, 3411513, 10, 11, 12, 13, 1083179008, 13417313, 13416313);
    InitializeEvent(14, 13417500, 3411653, 3411514, 20, 21, 22, 23, 1069547520, 13417314, 13416314);
    InitializeEvent(15, 13417500, 3411653, 3411515, 0, 1, 2, 3, 1083179008, 13417315, 13416315);
    InitializeEvent(16, 13417500, 3411653, 3411516, 10, 11, 12, 13, 1083179008, 13417316, 13416316);
    InitializeEvent(17, 13417500, 3411653, 3411517, 20, 21, 22, 23, 1069547520, 13417317, 13416317);
    InitializeEvent(18, 13417500, 3411653, 3411518, 0, 1, 2, 3, 1083179008, 13417318, 13416318);
    InitializeEvent(19, 13417500, 3411653, 3411519, 10, 11, 12, 13, 1083179008, 13417319, 13416319);
    InitializeEvent(20, 13417500, 3411653, 3411520, 20, 21, 22, 23, 1069547520, 13417320, 13416320);
    InitializeEvent(21, 13417500, 3411653, 3411521, 0, 1, 2, 3, 1083179008, 13417321, 13416321);
    InitializeEvent(22, 13417500, 3411653, 3411522, 10, 11, 12, 13, 1083179008, 13417322, 13416322);
    InitializeEvent(23, 13417500, 3411653, 3411523, 20, 21, 22, 23, 1069547520, 13417323, 13416323);
    InitializeEvent(56, 13417500, 3411653, 3411556, 0, 1, 2, 3, 1083179008, 13417356, 13416356);
    InitializeEvent(57, 13417500, 3411653, 3411557, 10, 11, 12, 13, 1083179008, 13417357, 13416357);
    InitializeEvent(58, 13417500, 3411653, 3411558, 0, 1, 2, 3, 1083179008, 13417358, 13416358);
    InitializeEvent(59, 13417500, 3411653, 3411559, 10, 11, 12, 13, 1083179008, 13417359, 13416359);
    InitializeEvent(60, 13417500, 3411653, 3411560, 0, 1, 2, 3, 1083179008, 13417360, 13416360);
    InitializeEvent(61, 13417500, 3411653, 3411561, 10, 11, 12, 13, 1083179008, 13417361, 13416361);
    InitializeEvent(62, 13417500, 3411653, 3411562, 0, 1, 2, 3, 1083179008, 13417362, 13416362);
    InitializeEvent(63, 13417500, 3411653, 3411563, 10, 11, 12, 13, 1083179008, 13417363, 13416363);
    InitializeEvent(64, 13417500, 3411653, 3411564, 0, 1, 2, 3, 1083179008, 13417364, 13416364);
    InitializeEvent(65, 13417500, 3411653, 3411565, 10, 11, 12, 13, 1083179008, 13417365, 13416365);
    InitializeEvent(66, 13417500, 3411653, 3411566, 20, 21, 22, 23, 1069547520, 13417366, 13416366);
    InitializeEvent(67, 13417500, 3411653, 3411567, 20, 21, 22, 23, 1069547520, 13417367, 13416367);
    InitializeEvent(12, 13417600, 3411653, 3411610, 0, 1, 2, 3, 1083179008, 13417412, 13416412);
    InitializeEvent(13, 13417600, 3411653, 3411611, 10, 11, 12, 13, 1083179008, 13417413, 13416413);
    InitializeEvent(14, 13417600, 3411653, 3411612, 0, 1, 2, 3, 1083179008, 13417414, 13416414);
    InitializeEvent(15, 13417600, 3411653, 3411613, 10, 11, 12, 13, 1083179008, 13417415, 13416415);
    InitializeEvent(16, 13417600, 3411653, 3411614, 0, 1, 2, 3, 1083179008, 13417416, 13416416);
    InitializeEvent(17, 13417600, 3411653, 3411615, 10, 11, 12, 13, 1083179008, 13417417, 13416417);
    InitializeEvent(18, 13417600, 3411653, 3411616, 0, 1, 2, 3, 1083179008, 13417418, 13416418);
    InitializeEvent(19, 13417600, 3411653, 3411617, 10, 11, 12, 13, 1083179008, 13417419, 13416419);
    InitializeEvent(20, 13417600, 3411653, 3411618, 0, 1, 2, 3, 1083179008, 13417420, 13416420);
    InitializeEvent(21, 13417600, 3411653, 3411619, 20, 21, 22, 23, 1069547520, 13417421, 13416421);
    InitializeEvent(22, 13417600, 3411653, 3411620, 0, 1, 2, 3, 1083179008, 13417422, 13416422);
    InitializeEvent(23, 13417600, 3411653, 3411621, 10, 11, 12, 13, 1083179008, 13417423, 13416423);
    InitializeEvent(24, 13417600, 3411653, 3411622, 20, 21, 22, 23, 1069547520, 13417424, 13416424);
    InitializeEvent(25, 13417600, 3411653, 3411623, 20, 21, 22, 23, 1069547520, 13417425, 13416425);
    InitializeEvent(26, 13417600, 3411653, 3411624, 20, 21, 22, 23, 1069547520, 13417426, 13416426);
    InitializeEvent(2, 13417500, 3411651, 3411502, 0, 1, 2, 3, 1083179008, 13417302, 13416302);
    InitializeEvent(3, 13417500, 3411651, 3411503, 10, 11, 12, 13, 1083179008, 13417303, 13416303);
    InitializeEvent(4, 13417500, 3411651, 3411504, 0, 1, 2, 3, 1083179008, 13417304, 13416304);
    InitializeEvent(5, 13417500, 3411651, 3411505, 10, 11, 12, 13, 1083179008, 13417305, 13416305);
    InitializeEvent(24, 13417500, 3411651, 3411524, 0, 1, 2, 3, 1083179008, 13417324, 13416324);
    InitializeEvent(25, 13417500, 3411651, 3411525, 10, 11, 12, 13, 1083179008, 13417325, 13416325);
    InitializeEvent(26, 13417500, 3411651, 3411526, 0, 1, 2, 3, 1083179008, 13417326, 13416326);
    InitializeEvent(27, 13417500, 3411651, 3411527, 10, 11, 12, 13, 1083179008, 13417327, 13416327);
    InitializeEvent(68, 13417500, 3411651, 3411568, 0, 1, 2, 3, 1083179008, 13417368, 13416368);
    InitializeEvent(69, 13417500, 3411651, 3411569, 10, 11, 12, 13, 1083179008, 13417369, 13416369);
    InitializeEvent(70, 13417500, 3411651, 3411570, 0, 1, 2, 3, 1083179008, 13417370, 13416370);
    InitializeEvent(71, 13417500, 3411651, 3411571, 0, 1, 2, 3, 1083179008, 13417371, 13416371);
    InitializeEvent(72, 13417500, 3411651, 3411572, 20, 21, 22, 23, 1069547520, 13417372, 13416372);
    InitializeEvent(73, 13417500, 3411651, 3411573, 0, 1, 2, 3, 1083179008, 13417373, 13416373);
    InitializeEvent(74, 13417500, 3411651, 3411574, 10, 11, 12, 13, 1083179008, 13417374, 13416374);
    InitializeEvent(75, 13417500, 3411651, 3411575, 0, 1, 2, 3, 1083179008, 13417375, 13416375);
    InitializeEvent(76, 13417500, 3411651, 3411576, 10, 11, 12, 13, 1083179008, 13417376, 13416376);
    InitializeEvent(77, 13417500, 3411651, 3411577, 0, 1, 2, 3, 1083179008, 13417377, 13416377);
    InitializeEvent(78, 13417500, 3411651, 3411578, 10, 11, 12, 13, 1083179008, 13417378, 13416378);
    InitializeEvent(79, 13417500, 3411651, 3411579, 20, 21, 22, 23, 1069547520, 13417379, 13416379);
    InitializeEvent(80, 13417500, 3411651, 3411580, 20, 21, 22, 23, 1069547520, 13417380, 13416380);
    InitializeEvent(81, 13417500, 3411651, 3411581, 20, 21, 22, 23, 1069547520, 13417381, 13416381);
    InitializeEvent(82, 13417500, 3411651, 3411582, 20, 21, 22, 23, 1069547520, 13417382, 13416382);
    InitializeEvent(7, 13417500, 3411651, 3411507, 20, 21, 22, 23, 1069547520, 13417307, 13416307);
    InitializeEvent(8, 13417500, 3411651, 3411508, 20, 21, 22, 23, 1069547520, 13417308, 13416308);
    InitializeEvent(9, 13417500, 3411651, 3411509, 20, 21, 22, 23, 1069547520, 13417309, 13416309);
    InitializeEvent(35, 13417600, 3411651, 3411633, 20, 21, 22, 23, 1069547520, 13417435, 13416435);
    InitializeEvent(36, 13417600, 3411651, 3411634, 20, 21, 22, 23, 1069547520, 13417436, 13416436);
    InitializeEvent(37, 13417600, 3411651, 3411635, 20, 21, 22, 23, 1069547520, 13417437, 13416437);
    InitializeEvent(38, 13417600, 3411651, 3411636, 20, 21, 22, 23, 1069547520, 13417438, 13416438);
    InitializeEvent(39, 13417600, 3411651, 3411637, 20, 21, 22, 23, 1069547520, 13417439, 13416439);
    InitializeEvent(83, 13417500, 3411654, 3411583, 0, 1, 2, 3, 1083179008, 13417383, 13416383);
    InitializeEvent(84, 13417500, 3411654, 3411584, 10, 11, 12, 13, 1083179008, 13417384, 13416384);
    InitializeEvent(85, 13417500, 3411654, 3411585, 0, 1, 2, 3, 1083179008, 13417385, 13416385);
    InitializeEvent(86, 13417500, 3411654, 3411586, 10, 11, 12, 13, 1083179008, 13417386, 13416386);
    InitializeEvent(87, 13417500, 3411654, 3411587, 0, 1, 2, 3, 1083179008, 13417387, 13416387);
    InitializeEvent(88, 13417500, 3411654, 3411588, 10, 11, 12, 13, 1083179008, 13417388, 13416388);
    InitializeEvent(89, 13417500, 3411654, 3411589, 0, 1, 2, 3, 1083179008, 13417389, 13416389);
    InitializeEvent(90, 13417500, 3411654, 3411590, 10, 11, 12, 13, 1083179008, 13417390, 13416390);
    InitializeEvent(91, 13417500, 3411654, 3411591, 20, 21, 22, 23, 1069547520, 13417391, 13416391);
    InitializeEvent(92, 13417500, 3411654, 3411592, 20, 21, 22, 23, 1069547520, 13417392, 13416392);
    InitializeEvent(93, 13417500, 3411654, 3411593, 20, 21, 22, 23, 1069547520, 13417393, 13416393);
    InitializeEvent(94, 13417500, 3411654, 3411594, 20, 21, 22, 23, 1069547520, 13417394, 13416394);
    InitializeEvent(95, 13417500, 3411654, 3411595, 20, 21, 22, 23, 1069547520, 13417395, 13416395);
    InitializeEvent(96, 13417500, 3411654, 3411596, 20, 21, 22, 23, 1069547520, 13417396, 13416396);
    InitializeEvent(97, 13417500, 3411654, 3411597, 20, 21, 22, 23, 1069547520, 13417397, 13416397);
    InitializeEvent(98, 13417500, 3411654, 3411598, 20, 21, 22, 23, 1069547520, 13417398, 13416398);
    InitializeEvent(99, 13417500, 3411654, 3411599, 20, 21, 22, 23, 1069547520, 13417399, 13416399);
    InitializeEvent(0, 13417600, 3411654, 3411600, 20, 21, 22, 23, 1069547520, 13417400, 13416400);
    InitializeEvent(1, 13417600, 3411654, 3411601, 20, 21, 22, 23, 1069547520, 13417401, 13416401);
    InitializeEvent(2, 13417600, 3411654, 3411602, 20, 21, 22, 23, 1069547520, 13417402, 13416402);
    InitializeEvent(3, 13417600, 3411654, 3411603, 20, 21, 22, 23, 1069547520, 13417403, 13416403);
    InitializeEvent(4, 13417600, 3411654, 3411604, 20, 21, 22, 23, 1069547520, 13417404, 13416404);
    InitializeEvent(5, 13417600, 3411654, 3411605, 20, 21, 22, 23, 1069547520, 13417405, 13416405);
    InitializeEvent(6, 13417600, 3411654, 3411606, 20, 21, 22, 23, 1069547520, 13417406, 13416406);
    InitializeEvent(7, 13417600, 3411654, 3411607, 20, 21, 22, 23, 1069547520, 13417407, 13416407);
    InitializeEvent(8, 13417600, 3411654, 3411608, 10, 11, 12, 13, 1083179008, 13417408, 13416408);
    InitializeEvent(9, 13417600, 3411654, 3411609, 0, 1, 2, 3, 1083179008, 13417409, 13416409);
    InitializeEvent(10, 13417600, 3411654, 3411610, 10, 11, 12, 13, 1083179008, 13417410, 13416410);
    InitializeEvent(11, 13417600, 3411654, 3411611, 0, 1, 2, 3, 1083179008, 13417411, 13416411);
    InitializeEvent(0, 13415420, 3411390, 341020, 3414390); // Wax Pool
    InitializeEvent(1, 13415420, 3411391, 342100, 3414470); // Wax Pool
    InitializeEvent(2, 13415420, 3411392, 342100, 3414471); // Wax Pool

    // Curse Hands
    InitializeEvent(100, 13417500, 3411653, 3411700, 20, 21, 22, 23, 1069547520, 13417320, 13416320);
    InitializeEvent(101, 13417500, 3411653, 3411701, 20, 21, 22, 23, 1069547520, 13417320, 13416320);
    InitializeEvent(102, 13417500, 3411653, 3411702, 20, 21, 22, 23, 1069547520, 13417320, 13416320);
    InitializeEvent(103, 13417500, 3411653, 3411703, 20, 21, 22, 23, 1069547520, 13417320, 13416320);
    InitializeEvent(104, 13417500, 3411653, 3411704, 20, 21, 22, 23, 1069547520, 13417320, 13416320);

    InitializeCommonEvent(20005650, 13410490, 3411310);
    InitializeCommonEvent(20005628, 0, -1, 0);

    //--------------------------------
    // Treasure
    //--------------------------------
    // One-time Loot
    InitializeCommonEvent(20005351, 3410650, 3412050, 53412000, 1); // Archive Scholar - Scholar's Candlestick

    // One-time Enemies
    InitializeCommonEvent(20008100, 13410256, 3410256, 3412010); // Black Dragon Knight (Greataxe)
    InitializeCommonEvent(20008100, 13410257, 3410257, 3412020); // Black Dragon Knight (Greatsword)
    InitializeCommonEvent(20008100, 13410258, 3410258, 3412030); // Black Dragon Knight (Sword)
    InitializeCommonEvent(20005341, 13410200, 3410200, 3412040); // Crystal Sage

    InitializeCommonEvent(20008150, 13410370, 3410370); // Crystal Lizard
    InitializeCommonEvent(20008150, 13410371, 3410371); // Crystal Lizard
    InitializeCommonEvent(20008150, 13410372, 3410372); // Crystal Lizard
    InitializeCommonEvent(20008150, 13410373, 3410373); // Crystal Lizard
    InitializeCommonEvent(20008150, 13410374, 3410374); // Crystal Lizard
    InitializeCommonEvent(20008150, 13410375, 3410375); // Crystal Lizard
    InitializeCommonEvent(20008150, 13410376, 3410376); // Crystal Lizard
    InitializeCommonEvent(20008150, 13410377, 3410377); // Crystal Lizard

    // NPC Treasure Control
    InitializeCommonEvent(20005342, 13410202, 3410198); // Lion Knight Albert
    InitializeCommonEvent(20005342, 13410203, 3410199); // Daughter of Crystal Kriemhild
    InitializeCommonEvent(20005342, 13410204, 3410196); // Black Hand Gotthard

    // Scholar Corpses
    InitializeEvent(0, 13415250, 53410600, 3411330);
    InitializeEvent(1, 13415250, 53410610, 3411331);
    InitializeEvent(2, 13415250, 53410620, 3411332);

    // Mimics
    InitializeCommonEvent(20005400, 3410900); // Open Action
    InitializeCommonEvent(20005400, 3410901); // Open Action
    InitializeCommonEvent(20005400, 3410902); // Open Action
    InitializeCommonEvent(20000343, 13410900, 3410900, 53411000); // Treasure Control 
    InitializeCommonEvent(20000343, 13410901, 3410901, 53411010); // Treasure Control
    InitializeCommonEvent(20000343, 13410902, 3410902, 53411020); // Treasure Control

    // Mimics - Crown of Illusion
    InitializeCommonEvent(20000343, 13410903, 3410903, 53411030); // Treasure Control
    InitializeCommonEvent(20000343, 13410904, 3410904, 53411040); // Treasure Control
    InitializeCommonEvent(20000343, 13410905, 3410905, 53411050); // Treasure Control
    InitializeCommonEvent(20000343, 13410906, 3410906, 53411060); // Treasure Control
    InitializeCommonEvent(20000343, 13410907, 3410907, 53411070); // Treasure Control

    InitializeEvent(0, 13410100, 13410903, 3410903); // Open Action
    InitializeEvent(1, 13410100, 13410904, 3410904); // Open Action
    InitializeEvent(2, 13410100, 13410905, 3410905); // Open Action
    InitializeEvent(3, 13410100, 13410906, 3410906); // Open Action
    InitializeEvent(4, 13410100, 13410907, 3410907); // Open Action

    InitializeEvent(0, 13410120, 13410903, 3410903); // Visibility
    InitializeEvent(1, 13410120, 13410904, 3410904); // Visibility
    InitializeEvent(2, 13410120, 13410905, 3410905); // Visibility
    InitializeEvent(3, 13410120, 13410906, 3410906); // Visibility
    InitializeEvent(4, 13410120, 13410907, 3410907); // Visibility

    // Chests
    InitializeCommonEvent(20005520, 13411900, 3411900, 3414900);
    InitializeCommonEvent(20005520, 13411901, 3411901, 3414901);
    InitializeCommonEvent(20005520, 13411902, 3411902, 3414902);
    InitializeCommonEvent(20005520, 13411903, 3411903, 3414903);
    InitializeCommonEvent(20005520, 13411904, 3411904, 3414904);
    InitializeCommonEvent(20005520, 13411905, 3411905, 3414905);
    InitializeCommonEvent(20005520, 13411906, 3411906, 3414906);
    InitializeCommonEvent(20005520, 13411907, 3411907, 3414907);
    InitializeCommonEvent(20005520, 13411908, 3411908, 3414908);
    InitializeCommonEvent(20005520, 13411909, 3411909, 3414909);
    InitializeCommonEvent(20005520, 13411910, 3411910, 3414910);
    InitializeCommonEvent(20005520, 13411911, 3411911, 3414911);
    InitializeCommonEvent(20005520, 13411912, 3411912, 3414912);
    InitializeCommonEvent(20005520, 13411913, 3411913, 3414913);
    InitializeCommonEvent(20005520, 13411914, 3411914, 3414914);
    InitializeCommonEvent(20005520, 13411915, 3411915, 3414915);
    InitializeCommonEvent(20005520, 13411916, 3411916, 3414916);
    InitializeCommonEvent(20005520, 13411917, 3411917, 3414917);
    InitializeCommonEvent(20005520, 13411918, 3411918, 3414918);
    InitializeCommonEvent(20005520, 13411919, 3411919, 3414919);

    //--------------------------------
    // Enemies
    //--------------------------------
    // NG+
    InitializeCommonEvent(20008001, 3415775, 1);
    InitializeCommonEvent(20008001, 3415776, 2);
    InitializeCommonEvent(20008001, 3415777, 3);

    // The Pursuer
    InitializeCommonEvent(20090010, 3410730, 3412730, 30310, 63010, 11720, 99005310, 99005311, 13410730); // Setup
    InitializeCommonEvent(20090020, 3410730, 81200); // Kill Taunt

    // Quintus the Monstrous
    InitializeCommonEvent(20090010, 3410732, 3412732, 30310, 63010, 14300, 99005490, 99005491, 13410732); // Setup
    InitializeCommonEvent(20090020, 3410732, 81200); // Kill Taunt

    //--------------------------------
    // NPCs
    //--------------------------------
    // Merchants
    InitializeCommonEvent(20081200, 13410746, 3410746, 20); // Erstwhile George - Idle
    InitializeCommonEvent(20081210, 13410746, 3410746); // Erstwhile George  - Hostility
    InitializeCommonEvent(20090300, 3410746, 3410749); // Erstwhile George - Talk Toggle
});

//---------------------------------------------
// Destructor
//---------------------------------------------
$Event(50, Default, function() {
    InitializeEvent(0, 13415600, 0);
    SetMapSoundState(3412833, Disabled);
    SetMapSoundState(3412834, Disabled);
});

//----------------------------------------------
// Mimic - Crown of Illusion - Open Action
// <entity id>
//----------------------------------------------
$Event(13410100, Default, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));

    WaitFor(
        CharacterHasSpEffect(10000, 160409001)
            && CharacterHasSpEffect(X4_4, 11700)
            && ActionButtonInArea(8010, X4_4)
            && !CharacterType(10000, TargetType.BlackPhantom));
    WarpCharacterAndCopyFloor(10000, TargetEntityType.Character, X4_4, 100, 10000);
    ForceAnimationPlayback(10000, 60080, false, false, false, 0, 1);
    GotoIf(L1, CharacterHasSpEffect(X4_4, 5020));
    GotoIf(L2, CharacterHasSpEffect(X4_4, 5021));
    EndEvent();

L1:
    ForceAnimationPlayback(X4_4, 3000, false, false, false, 0, 1);
    RestartEvent();

L2:
    RequestCharacterAIReplan(X4_4);
    RequestCharacterAICommand(X4_4, 10, 0);
    WaitFor(CharacterHasSpEffect(X4_4, 5404));
    RequestCharacterAICommand(X4_4, -1, 0);
    RequestCharacterAIReplan(X4_4);
    RestartEvent();
});

//----------------------------------------------
// Mimic - Crown of Illusion - Visibility
// <entity id>
//----------------------------------------------
$Event(13410120, Default, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));

    // No Crown
    if (CharacterHasSpEffect(10000, 160409001)) {
        ChangeCharacterEnableState(X4_4, Enabled);
        SetCharacterAnimationState(X4_4, Enabled);
    }

    // Crown
    if (!CharacterHasSpEffect(10000, 160409001)) {
        ChangeCharacterEnableState(X4_4, Disabled);
        SetCharacterAnimationState(X4_4, Disabled);
    }

    WaitFixedTimeSeconds(1.0);

    RestartEvent();
});

$Event(13410300, Default, function() {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(ThisEventSlot());
    WaitFor(CharacterDead(3410500) && CharacterDead(3410501) && CharacterDead(3410502));
    AwardItemLot(12902200); // Winged Knight - Titanite Slab
});

$Event(13415250, Restart, function(X0_4, X4_4) {
    if (!EventFlag(X0_4)) {
        ForceAnimationPlayback(X4_4, 1, true, false, false, 0, 1);
        WaitFor(EventFlag(X0_4));
    }
L0:
    ForceAnimationPlayback(X4_4, 0, false, false, false, 0, 1);
});

$Event(13415270, Restart, function(X0_4) {
    if (!ThisEventSlot()) {
        ClearSpEffect(X0_4, 11970);
        WaitFor(
            (CharacterAIState(X0_4, AIStateType.Recognition)
                || CharacterAIState(X0_4, AIStateType.Combat))
                || CharacterDamagedBy(X0_4, 10000));
    }
L0:
    SetSpEffect(X0_4, 11970);
});

$Event(13415350, Restart, function(X0_4) {
    SetCharacterAIState(X0_4, Disabled);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    EndIf(EventFlag(13410200));
    if (!ThisEventSlot()) {
        WaitFor(
            ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.Hollow)
                || CharacterType(10000, TargetType.WhitePhantom))
                && (InArea(10000, 3412500)
                    || InArea(10000, 3412781)
                    || InArea(10000, 3412782)
                    || InArea(10000, 3412783)
                    || InArea(10000, 3412784)));
        ForceAnimationPlayback(X0_4, 20003, false, false, false, 0, 1);
    }
L0:
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);
});

$Event(13415351, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4, X36_4) {
    EndIf(EventFlag(13410200));
    GotoIf(L12, EventFlag(13415434));
    GotoIf(L11, EventFlag(13415433));
    GotoIf(L10, EventFlag(13415432));
    GotoIf(L11, EventFlag(13415433));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    dmgArea = HasDamageType(X0_4, 10000, DamageType.Unspecified) && InArea(X0_4, X4_4);
    area = InArea(10000, X8_4) && InArea(X0_4, X4_4);
    dmgArea2 = HasDamageType(X0_4, 10000, DamageType.Unspecified) && InArea(X0_4, X8_4);
    area2 = (InArea(10000, X12_4) || InArea(10000, X16_4) || InArea(10000, X20_4)) && InArea(X0_4, X4_4);
    area3 = (InArea(10000, X12_4) || InArea(10000, X16_4) || InArea(10000, X20_4)) && InArea(X0_4, X8_4);
    dmgArea3 = HasDamageType(X0_4, 10000, DamageType.Unspecified) && InArea(X0_4, X12_4);
    dmgArea4 = HasDamageType(X0_4, 10000, DamageType.Unspecified) && InArea(X0_4, X16_4);
    dmgArea5 = HasDamageType(X0_4, 10000, DamageType.Unspecified) && InArea(X0_4, X20_4);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.WhitePhantom)
            || CharacterType(10000, TargetType.Hollow))
            && (dmgArea || area || dmgArea2 || area2 || area3 || dmgArea3 || dmgArea4 || dmgArea5));
    SetCharacterAIId(X0_4, 132051);
    WaitFixedTimeFrames(2);
    RequestCharacterAICommand(X0_4, 10, 0);
    RequestCharacterAIReplan(X0_4);
    SetNetworkconnectedEventFlag(13415432, ON);
L10:
    time = ElapsedSeconds(10);
    WaitFor(time || CharacterHasEventMessage(X0_4, 60));
    RestartIf(time.Passed);
    SetNetworkconnectedEventFlag(13415433, ON);
L11:
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 70));
    SetNetworkconnectedEventFlag(13415434, ON);
L12:
    GotoIf(L0, dmgArea.Passed);
    GotoIf(L0, area.Passed);
    GotoIf(L1, dmgArea2.Passed);
    GotoIf(L1, area2.Passed);
    GotoIf(L1, area3.Passed);
    GotoIf(L3, dmgArea3.Passed);
    GotoIf(L3, dmgArea4.Passed);
    if (!dmgArea5.Passed) {
L0:
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X24_4, -1, X24_4);
        SetCharacterAIId(X0_4, 132051);
        Goto(L4);
L1:
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X32_4, -1, X32_4);
        SetCharacterAIId(X0_4, 132052);
        Goto(L4);
    }
L2:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X28_4, -1, X28_4);
    SetCharacterAIId(X0_4, 132052);
    Goto(L4);
L3:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X36_4, -1, X36_4);
    SetCharacterAIId(X0_4, 132052);
    Goto(L4);
L4:
    ForceAnimationPlayback(X0_4, 20003, false, true, false, 0, 1);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(13415432, OFF);
    SetEventFlag(13415433, OFF);
    SetEventFlag(13415434, OFF);
    RestartEvent();
});

$Event(13415355, Restart, function(X0_4) {
    EndIf(EventFlag(13410200));
    SetNetworkSyncState(Disabled);
    WaitFor(InArea(10000, 3412611));
    SetCharacterDefaultBackreadState(X0_4, Enabled);
    ImmediateActivateUnknown200454(X0_4, Enabled);
    WaitFor(!InArea(10000, 3412611));
    SetCharacterDefaultBackreadState(X0_4, Disabled);
    ImmediateActivateUnknown200454(X0_4, Disabled);
    RestartEvent();
});

$Event(13415400, Restart, function() {
    InitializeCommonEvent(20005625, 13410450, 13410452, 3411450, 3411451, 3414451, 3411452, 3414452, 3412451, 3412452, 13411450, 13414450, 13410451);
});

$Event(13415410, Restart, function() {
    InitializeCommonEvent(20005623, 13410460, 13410462, 3411460, 3411461, 3414461, 3411462, 3414462, 3412461, 3412462, 13411460, 13414460, 0);
});

$Event(13415420, Restart, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(ObjActEventFlag(X8_4));
    WaitFixedTimeSeconds(5);
    SetObjactState(X0_4, X4_4, Enabled);
    RestartEvent();
});

$Event(13415430, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasSpEffect(10000, 12035));
    WaitFixedTimeFrames(1);
    if (!CharacterHasSpEffect(10000, 4600)) {
        SetSpEffect(10000, 4620);
        SetSpEffect(10000, 4621);
    }
    WaitFixedTimeSeconds(0.3);
    RestartEvent();
});

$Event(13415440, Restart, function() {
    EndIf(ThisEventSlot());
    RequestObjectRestoration(3411680);
    RequestObjectRestoration(3411681);
    RequestObjectRestoration(3411682);
    RequestObjectRestoration(3411683);
    RequestObjectRestoration(3411684);
    RequestObjectRestoration(3411685);
    RequestObjectRestoration(3411686);
    RequestObjectRestoration(3411687);
    RequestObjectRestoration(3411690);
    RequestObjectRestoration(3411691);
    RequestObjectRestoration(3411692);
    RequestObjectRestoration(3411693);
    RequestObjectRestoration(3411694);
    RequestObjectRestoration(3411695);
    RequestObjectRestoration(3411696);
    RequestObjectRestoration(3411697);
});

$Event(13415450, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(
        CharacterDamagedBy(X0_4, 10000)
            || (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)
                || CharacterType(10000, TargetType.Hollow))
                && InArea(10000, 3412522)));
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(X8_4);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false, 0, 1);
    WaitFixedTimeSeconds(2.2);
    SetSpEffect(X0_4, 4050);
    SetSpEffect(X0_4, 4070);
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterAIState(X0_4, Enabled);
    WaitFixedTimeSeconds(2.5);
    SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AlwaysUpdate);
});

$Event(13417500, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    ForceAnimationPlayback(X4_4, X8_4, true, false, false, 0, 1);
    if (!ObjectDestroyed(X0_4)) {
        if (!EventFlag(X32_4)) {
            chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)
                || CharacterType(10000, TargetType.Hollow);
            areaObj = EntityInRadiusOfEntity(10000, X4_4, X24_4, 1) || ObjectDestroyed(X0_4);
            WaitFor(areaObj && chrSp);
            GotoIf(L1, ObjectDestroyed(X0_4));
            ForceAnimationPlayback(X4_4, X12_4, false, false, false, 0, 1);
            WaitFixedTimeSeconds(0.8);
            CreateDamagingObject(X28_4, X4_4, 210, 5210, DamageTargetType.Character, 1.5, 0, 1);
            SetEventFlag(X32_4, ON);
            WaitFixedTimeSeconds(1.2);
        }
L0:
        ForceAnimationPlayback(X4_4, X16_4, true, false, false, 0, 1);
        WaitFor(ElapsedFrames(210) || ObjectDestroyed(X0_4));
        if (!ObjectDestroyed(X0_4)) {
            RestartIf(EntityInRadiusOfEntity(10000, X4_4, X24_4, 1));
        }
        ForceAnimationPlayback(X4_4, X20_4, false, true, false, 0, 1);
        DeleteObjectEvent(X28_4);
        SetEventFlag(X32_4, OFF);
        WaitFixedTimeFrames(1);
        RestartEvent();
    }
L1:
    RequestObjectDestruction(X4_4, 1);
    EndEvent();
});

$Event(13417600, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    ForceAnimationPlayback(X4_4, X8_4, true, false, false, 0, 1);
    if (!ObjectDestroyed(X0_4)) {
        if (!EventFlag(X32_4)) {
            chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)
                || CharacterType(10000, TargetType.Hollow);
            areaObj = EntityInRadiusOfEntity(10000, X4_4, X24_4, 1) || ObjectDestroyed(X0_4);
            WaitFor(areaObj && chrSp);
            GotoIf(L1, ObjectDestroyed(X0_4));
            ForceAnimationPlayback(X4_4, X12_4, false, false, false, 0, 1);
            WaitFixedTimeSeconds(0.8);
            CreateDamagingObject(X28_4, X4_4, 210, 5210, DamageTargetType.Character, 1.5, 0, 1);
            SetEventFlag(X32_4, ON);
            WaitFixedTimeSeconds(1.2);
        }
L0:
        ForceAnimationPlayback(X4_4, X16_4, true, false, false, 0, 1);
        WaitFor(ElapsedFrames(210) || ObjectDestroyed(X0_4));
        if (!ObjectDestroyed(X0_4)) {
            RestartIf(EntityInRadiusOfEntity(10000, X4_4, X24_4, 1));
        }
        ForceAnimationPlayback(X4_4, X20_4, false, true, false, 0, 1);
        DeleteObjectEvent(X28_4);
        SetEventFlag(X32_4, OFF);
        WaitFixedTimeFrames(1);
        RestartEvent();
    }
L1:
    RequestObjectDestruction(X4_4, 1);
    EndEvent();
});

$Event(13415490, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (EventFlag(X0_4)) {
        ForceAnimationPlayback(X4_4, 2, false, false, false, 0, 1);
        SetObjactState(X8_4, X12_4, Disabled);
        EndEvent();
    }
L0:
    SetObjactState(X8_4, X12_4, Enabled);
    WaitFor(ObjActEventFlag(X16_4));
    SetNetworkconnectedEventFlag(X0_4, ON);
    WaitFixedTimeSeconds(2);
    ForceAnimationPlayback(X8_4, 2, false, false, false, 0, 1);
    SetObjactState(X8_4, X12_4, Disabled);
    ForceAnimationPlayback(X4_4, 1, false, true, false, 0, 1);
    ForceAnimationPlayback(X4_4, 2, false, false, false, 0, 1);
});

$Event(13415495, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (EventFlag(X0_4)) {
        ForceAnimationPlayback(X4_4, 2, false, false, false, 0, 1);
        ForceAnimationPlayback(X8_4, 2, false, false, false, 0, 1);
        SetObjactState(X12_4, X16_4, Disabled);
        EndEvent();
    }
L0:
    SetObjactState(X12_4, X16_4, Enabled);
    WaitFor(ObjActEventFlag(X20_4));
    SetNetworkconnectedEventFlag(X0_4, ON);
    WaitFixedTimeSeconds(2);
    ForceAnimationPlayback(X12_4, 2, false, false, false, 0, 1);
    SetObjactState(X12_4, X16_4, Disabled);
    ForceAnimationPlayback(X4_4, 1, false, false, false, 0, 1);
    ForceAnimationPlayback(X8_4, 1, false, true, false, 0, 1);
    ForceAnimationPlayback(X4_4, 2, false, false, false, 0, 1);
    ForceAnimationPlayback(X8_4, 2, false, false, false, 0, 1);
});

//----------------------------------------
// Twin Princes - Phase 1 Start
//----------------------------------------
$Event(13415830, Restart, function() {
    SetCharacterAIState(3410830, Disabled); // Lorian
    SetCharacterAIState(3410831, Disabled); // Lothric (HU)
    SetCharacterAIState(3410832, Disabled); // Lorian (HU)
    ChangeCharacterEnableState(3410830, Disabled); // Lorian
    ChangeCharacterEnableState(3410831, Disabled); // Lothric (HU)
    ChangeCharacterEnableState(3410832, Disabled); // Lorian (HU)
    SetCharacterAnimationState(3410830, Disabled); // Lorian
    SetCharacterAnimationState(3410831, Disabled); // Lothric (HU)
    SetCharacterAnimationState(3410832, Disabled); // Lorian (HU)
    SetMapSoundState(3412833, Disabled);
    DeactivateObject(3411810, Disabled); // Lothric object
    EndIf(EventFlag(13410830));
    DeactivateObject(3411810, Enabled);
    ChangeCharacterEnableState(3410832, Enabled); // Lothric object
    SetCharacterAnimationState(3410832, Enabled);
    if (NumberOfClientsOfType(ClientType.Invader) != 0) {
        SetEventFlag(13415830, OFF);
    }
    if (!ThisEventSlot()) {
        if (!EventFlag(13410831)) {
            ChangeCharacterEnableState(3410832, Disabled);
            SetCharacterAnimationState(3410832, Disabled);
            WaitFor(InArea(10000, 3412846));
            if (NumberOfClientsOfType(ClientType.Invader) != 0) {
                IssueBossRoomEntryNotification(0);
            }
            EndIf(
                CharacterInvadeType(10000, 4)
                    || CharacterInvadeType(10000, 7)
                    || CharacterInvadeType(10000, 21)
                    || CharacterType(10000, TargetType.BlackPhantom));
            if (!EventFlag(13410831)) {
                if (!HasMultiplayerState(MultiplayerState.TryingtoCreateSession)) {
                    PlayCutsceneAndWarpPlayer(34010010, CutscenePlayMode.Skippable, 3412840, 34, 1, 10000);
                } else if (NumberOfClientsOfType(ClientType.Invader) != 0) {
                    PlayCutsceneAndWarpPlayer(34010010, CutscenePlayMode.UnskippableWithFadeOut, 3412840, 34, 1, 10000);
                } else {
                    PlayCutsceneToPlayer(34010010, CutscenePlayMode.Unskippable, 10000);
                }
            }
            WaitFixedTimeFrames(1);
            ChangeCharacterEnableState(3410832, Enabled);
            SetCharacterAnimationState(3410832, Enabled);
            WarpCharacterAndCopyFloor(3410832, TargetEntityType.Area, 3412841, -1, 3412841);
        } else {

L0:
            WaitFor(InArea(10000, 3412830));
        }
    }

L1:
    SetCharacterAIState(3410832, Enabled);
    SetCharacterImmortality(3410832, Enabled);
    SetNetworkUpdateRate(3410832, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkconnectedEventFlag(13410831, ON);
    ActivateMultiplayerdependantBuffs(3410832);
    ActivateMultiplayerdependantBuffs(3410831);
    if (NumberOfClientsOfType(ClientType.Invader) != 0) {
        SetNetworkUpdateAuthority(3410830, AuthorityLevel.Forced);
        SetNetworkUpdateAuthority(3410831, AuthorityLevel.Forced);
        SetNetworkUpdateAuthority(3410832, AuthorityLevel.Forced);
    }
    DisplayBossHealthBar(Enabled, 3410832, 0, 905250);
    InitializeCommonEvent(20020117, 0); // Boss Start
});

//----------------------------------------
// Twin Princes - Phase 2 Start
//----------------------------------------
$Event(13415831, Restart, function() {
    EndIf(EventFlag(13410830));
    WaitFor(
        HPRatio(3410832) < 0.01 && !CharacterHasSpEffect(3410832, 11602) && EventFlag(13415835));
    DeactivateObject(3411810, Disabled); // Lothric object
    if (!HasMultiplayerState(MultiplayerState.TryingtoCreateSession)) {
        PlayCutsceneToPlayer(34010000, CutscenePlayMode.Skippable, 10000);
    } else if (NumberOfClientsOfType(ClientType.Invader) != 0) {
        PlayCutsceneToPlayer(34010000, CutscenePlayMode.SkippableWithFadeOut, 10000);
    } else {
        PlayCutsceneToPlayer(34010000, CutscenePlayMode.Unskippable, 10000);
    }
    WaitFixedTimeFrames(1);
    WarpCharacterAndCopyFloor(3410830, TargetEntityType.Character, 3410832, -1, 3410832);
    ChangeCharacterEnableState(3410832, Disabled);
    SetCharacterAnimationState(3410832, Disabled);
    SetCharacterAIState(3410832, Disabled);
    DisplayBossHealthBar(Disabled, 3410832, 0, 905250);
    SetNetworkUpdateRate(3410832, false, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(3410830, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(3410831, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAIState(3410830, Enabled);
    SetCharacterAIState(3410831, Enabled);
    ChangeCharacterEnableState(3410830, Enabled);
    ChangeCharacterEnableState(3410831, Enabled);
    SetCharacterAnimationState(3410830, Enabled);
    SetCharacterAnimationState(3410831, Enabled);
    DisplayBossHealthBar(Enabled, 3410830, 0, 905250);
    DisplayBossHealthBar(Enabled, 3410831, 1, 905251);
});

//----------------------------------------
// Twin Princes - Kill
//----------------------------------------
$Event(13410832, Default, function() {
    EndIf(EventFlag(13410830));
    hp = HPRatio(3410831) <= 0;
    hpSp = HPRatio(3410831) <= 0 && CharacterHasSpEffect(3410830, 11607);
    WaitFor(hp || hpSp);
    if (!hpSp.Passed) {
        ForceAnimationPlayback(3410830, 20001, false, false, true, 0, 1);
        WaitFixedTimeSeconds(7.5);
    } else {
L1:
        ForceAnimationPlayback(3410830, 20002, false, false, true, 0, 1);
        WaitFixedTimeSeconds(8);
    }
L2:
    PlaySE(3410830, SoundType.s_SFX, 777777777);
    WaitFixedTimeSeconds(1);
    ChangeCharacterEnableState(3410830, Disabled);
    ChangeCharacterEnableState(3410831, Disabled);
    SetCharacterAnimationState(3410830, Disabled);
    SetCharacterAnimationState(3410831, Disabled);
    WaitFixedTimeSeconds(5);
    HandleBossDefeatAndDisplayBanner(3410830, TextBannerType.LordofCinderFallen);
    ChangeCamera(-1, -1);
    SetEventFlag(13410830, ON);
    SetEventFlag(9309, ON);
    SetEventFlag(6309, ON);
    InitializeCommonEvent(20020000, 25001018, 25002018, 800300020, 800300030, 120170, 121170); // Boss Kill
});

//----------------------------------------
// Twin Princes - Common Setup
//----------------------------------------
$Event(13415833, Restart, function() {
    // Twin Princes - Enter Boss Room
    InitializeCommonEvent(20005800, 13410830, 3411830, 3412831, 13415835, 3411830, 0, 13410831, 0);
    // Twin Princes - Enter Fogwall (Client)
    InitializeCommonEvent(20005801, 13410830, 3411830, 3412831, 13415835, 3411830, 13415836);
    // Twin Princes - Toggle Fogwall State
    InitializeCommonEvent(20005820, 13410830, 3411830, 3, 13410831);
    // Twin Princes - Boss Sound State
    InitializeCommonEvent(20001836, 13410830, 13415835, 13415836, 13415830, 3412833, 3412834, 13415831);
    // Unknown200459
    InitializeCommonEvent(20005840, 3411830);
    // Unknown200459
    InitializeCommonEvent(20005841, 3411830);
    // Twin Princes - Enter Fogwall
    InitializeCommonEvent(20005810, 13410830, 3411830, 3412831, 10000);
});

//----------------------------------------
// Twin Princes - Prince Lothric - Gravity/Animation State
//----------------------------------------
$Event(13415840, Restart, function() {
    SetEventFlag(13415842, OFF);
    WaitFor(CharacterHasSpEffect(3410830, 11601));
    SetEventFlag(13415842, ON);
    SetCharacterGravity(3410831, Disabled);
    SetCharacterAnimationState(3410831, Disabled);
    WaitFor(!CharacterHasSpEffect(3410830, 11601));
    SetCharacterGravity(3410831, Enabled);
    SetCharacterAnimationState(3410831, Enabled);
    RestartEvent();
});

//----------------------------------------
// Twin Princes - Warp Prince Lothric to Prince Lorian
//----------------------------------------
$Event(13415841, Restart, function() {
    WaitFor(EventFlag(13415842));
    WarpCharacterAndCopyFloor(3410831, TargetEntityType.Character, 3410830, 50, 3410830);
    RestartEvent();
});

//----------------------------------------
// Twin Princes - Prince Lothric - Talk/Animation
//----------------------------------------
$Event(13415843, Restart, function() {
    EndIf(EventFlag(13410830));
    SetCharacterImmortality(3410830, Enabled);
    WaitFor(
        HPRatio(3410830) < 0.01 && !CharacterHasSpEffect(3410830, 11603) && !CharacterDead(3410831));
    WaitFixedTimeFrames(1);
    EndIf(HPRatio(3410831) <= 0);
    SetEventFlag(73410100, ON);
    ForceAnimationPlayback(3410831, 20000, false, false, true, 0, 1);
    ForceAnimationPlayback(3410830, 20000, false, true, true, 0, 1);
    RestartEvent();
});

//----------------------------------------
// Twin Princes - Camera Setup
//----------------------------------------
$Event(13415845, Default, function() {
    EndIf(EventFlag(13410830));
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(13415835) && InArea(10000, 3412830));
    ChangeCamera(5250, 5250);
});

$Event(13415600, Restart, function() {
    if (!PlayerIsNotInOwnWorld()) {
        if (!AnyBatchEventFlags(1415, 1419)) {
            BatchSetNetworkconnectedEventFlags(1415, 1419, OFF);
            SetNetworkconnectedEventFlag(1415, ON);
        }
        if (!AnyBatchEventFlags(1400, 1414)) {
            BatchSetNetworkconnectedEventFlags(1400, 1414, OFF);
            SetNetworkconnectedEventFlag(1400, ON);
        }
        if (EventFlag(13410830)) {
            BatchSetNetworkconnectedEventFlags(1400, 1419, OFF);
            SetNetworkconnectedEventFlag(1401, ON);
            SetNetworkconnectedEventFlag(1418, ON);
        }
    }
L10:
    if (!EventFlag(1400)) {
        EndEvent();
    }
L0:
    SetCharacterTalkRange(3410831, 80);
    EndEvent();
});

// ----------------------------------------
// Mirror Knight - Setup
// ----------------------------------------
$Event(13415850, Restart, function() {
    const entity_MirrorKnight                = 3410870;
    const entity_MirrorKnight_MadWarrior     = 3410875;
    const entity_MirrorKnight_HallowedKnight = 3410876;

    const trigger_MirrorKnight_FogwallZone = 3412910;

    const obj_MirrorKnight_Fogwall     = 3411870;
    const obj_MirrorKnight_BackFogwall = 3411871;

    const flag_MirrorKnight_Defeated   = 13410870;
    const flag_MirrorKnight_InBattle   = 13415885;
    const flag_MirrorKnight_InProgress = 13410871;

    const name_MirrorKnight = 207010;

    // Disable at init
    SetCharacterAIState(entity_MirrorKnight, Disabled);
    ChangeCharacterEnableState(entity_MirrorKnight, Disabled);
    SetCharacterAnimationState(entity_MirrorKnight, Disabled);

    DeactivateObject(obj_MirrorKnight_Fogwall, Disabled);
    DeactivateObject(obj_MirrorKnight_BackFogwall, Disabled);

    // End function if Mirror Knight has already been defeated
    EndIf(EventFlag(flag_MirrorKnight_Defeated));

    // Enable entities
    ChangeCharacterEnableState(entity_MirrorKnight, Enabled);
    SetCharacterAnimationState(entity_MirrorKnight, Enabled);
    SetSpEffect(entity_MirrorKnight, 160741901); // Add damage reduction to Mirror Knight
    ForceAnimationPlayback(entity_MirrorKnight, 700, true, false, false, 0, 1); // Kneel anim

    // Wait for player to examine Mirror Knight
    WaitFor(ActionButtonInArea(3411875, entity_MirrorKnight));

    // Play stand up anim
    ForceAnimationPlayback(entity_MirrorKnight, 1700, true, false, false, 0, 1);

    // Trigger fogwalls
    DeactivateObject(obj_MirrorKnight_Fogwall, Enabled);
    DeactivateObject(obj_MirrorKnight_BackFogwall, Enabled);
    CreateObjectfollowingSFX(obj_MirrorKnight_Fogwall, 101, 3);
    CreateObjectfollowingSFX(obj_MirrorKnight_BackFogwall, 101, 3);

    // Trigger boss fight
    SetEventFlag(flag_MirrorKnight_InBattle, ON);
    SetEventFlag(flag_MirrorKnight_InProgress, ON);

    WaitFixedTimeSeconds(1.0);

    ClearSpEffect(entity_MirrorKnight, 160741901); // Remove damage reduction

    // Setup entities fully
    SetCharacterGravity(entity_MirrorKnight, Enabled);
    SetCharacterAnimationState(entity_MirrorKnight, Enabled);
    SetCharacterAIState(entity_MirrorKnight, Enabled);
    SetNetworkUpdateRate(entity_MirrorKnight, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateMultiplayerdependantBuffs(entity_MirrorKnight);

    SetSpEffect(entity_MirrorKnight, 160741903); // Add Lightning VFX on sword

    if (NumberOfClientsOfType(ClientType.Invader) != 0) {
        SetNetworkUpdateAuthority(entity_MirrorKnight, AuthorityLevel.Forced);
    }

    DisplayBossHealthBar(Enabled, entity_MirrorKnight, 0, name_MirrorKnight);
    InitializeCommonEvent(20020127, 0); // Boss Start
});

// ----------------------------------------
// Mirror Knight - Kill
// ----------------------------------------
$Event(13415851, Default, function() {
    const entity_MirrorKnight = 3410870;

    const obj_MirrorKnight_Fogwall     = 3411870;
    const obj_MirrorKnight_BackFogwall = 3411871;

    const flag_MirrorKnight_Defeated = 13410870;
    const flag_MirrorKnight_InProgress = 13410871;

    const entity_MirrorKnight_MadWarrior     = 3410875;
    const entity_MirrorKnight_HallowedKnight = 3410876;

    // End function if Mirror Knight has already been defeated
    EndIf(EventFlag(flag_MirrorKnight_Defeated));

    WaitFor(HPRatio(entity_MirrorKnight) <= 0);
    SetSpEffect(entity_MirrorKnight_MadWarrior, 160741902);
    SetSpEffect(entity_MirrorKnight_HallowedKnight, 160741902);

    WaitFixedTimeSeconds(1);
    PlaySE(entity_MirrorKnight, SoundType.s_SFX, 777777777);
    DeactivateObject(obj_MirrorKnight_Fogwall, Disabled);
    DeactivateObject(obj_MirrorKnight_BackFogwall, Disabled);
    DeleteObjectfollowingSFX(obj_MirrorKnight_Fogwall, true);
    DeleteObjectfollowingSFX(obj_MirrorKnight_BackFogwall, true);
    WaitFixedTimeSeconds(4);
    HandleBossDefeat(entity_MirrorKnight);
    SetEventFlag(flag_MirrorKnight_Defeated, ON);
    SetEventFlag(flag_MirrorKnight_InProgress, OFF);
    SetEventFlag(9341, ON);
    SetEventFlag(6341, ON);

    InitializeCommonEvent(20020000, 25001028, 25002028, 800300020, 800300030, 120260, 121260); // Boss Kill
});

// ----------------------------------------
// Mirror Knight - Fogwalls
// ----------------------------------------
$Event(13415852, Restart, function() {
    const obj_MirrorKnight_Fogwall     = 3411870;
    const obj_MirrorKnight_BackFogwall = 3411871;

    const sound_MirrorKnight_BGM = 3414870;

    const trigger_MirrorKnight_FogwallZone = 3412910;

    const flag_MirrorKnight_Defeated    = 13410870;
    const flag_MirrorKnight_InBattle    = 13415885;
    const flag_MirrorKnight_ClientEnter = 13415886;
    const flag_MirrorKnight_BossStart   = 13415850; // Event ID flag

    const param_MirrorKnight_ActionButton = 3411870;

    // Mirror Knight - Boss Sound State
    InitializeCommonEvent(20001834, flag_MirrorKnight_Defeated, flag_MirrorKnight_InBattle, flag_MirrorKnight_InBattle, sound_MirrorKnight_BGM);
});

// ----------------------------------------
// Mirror Knight - Invalidation
// ----------------------------------------
$Event(13415853, Restart, function() {
    const trigger_MirrorKnight_InvalidationZone = 3412911;

    const entity_PlayerPoint = 3410960;
    const entity_SpawnPoint  = 3412960;

    const flag_MirrorKnight_Defeated   = 13410870;
    const flag_MirrorKnight_InProgress = 13410871;

    const mapID   = 34;
    const blockID = 1;
    const ceremonyID = 0

    // End function if Mirror Knight has already been defeated
    EndIf(EventFlag(flag_MirrorKnight_Defeated));
    // End function if not started
    EndIf(!EventFlag(flag_MirrorKnight_InProgress));

    // Warp player outside of arena if in invalidation zone
    if (EventFlag(flag_MirrorKnight_InProgress) && InArea(10000, trigger_MirrorKnight_InvalidationZone)) {

        SetEventFlag(flag_MirrorKnight_InProgress, OFF);
        SetPlayerRespawnPoint(entity_SpawnPoint);
        SetMapCeremony(mapID, blockID, ceremonyID);
        WaitFixedTimeFrames(1);
        SaveRequest(0);
        WaitFixedTimeFrames(1);
        WarpPlayer(mapID, blockID, entity_PlayerPoint);
    }

    // Fallback
    SetEventFlag(flag_MirrorKnight_InProgress, OFF);

    EndEvent();
});


// ----------------------------------------
// Mirror Knight - Mirror Phantoms
// ----------------------------------------
$Event(13415854, Restart, function() {
    const entity_MirrorKnight                = 3410870;
    const entity_MirrorKnight_MadWarrior     = 3410875;
    const entity_MirrorKnight_HallowedKnight = 3410876;

    const flag_MirrorKnight_Defeated = 13410870;
    const flag_MirrorKnight_InBattle = 13415885;

    const FFX_shield_explosion = 526512;

    const timer_MirrorKnightCooldown = 15.0;

    const percent_MadWarriorStage     = 0.75;
    const percent_HallowedKnightStage = 0.35;

    SetCharacterAIState(entity_MirrorKnight_MadWarrior, Disabled);
    ChangeCharacterEnableState(entity_MirrorKnight_MadWarrior, Disabled);
    SetCharacterAnimationState(entity_MirrorKnight_MadWarrior, Disabled);

    SetCharacterAIState(entity_MirrorKnight_HallowedKnight, Disabled);
    ChangeCharacterEnableState(entity_MirrorKnight_HallowedKnight, Disabled);
    SetCharacterAnimationState(entity_MirrorKnight_HallowedKnight, Disabled);

    // End function if Mirror Knight has already been defeated
    EndIf(EventFlag(flag_MirrorKnight_Defeated));

    // Wait for boss fight to begin
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, flag_MirrorKnight_InBattle);

    // -----------
    // Mad Warrior
    // -----------
    WaitFor(HPRatio(entity_MirrorKnight) <= percent_MadWarriorStage);

    // Stop the Mirror Knight
    SetCharacterAIState(entity_MirrorKnight, Disabled);
    SetCharacterAnimationState(entity_MirrorKnight, Enabled);
    ChangeCharacterEnableState(entity_MirrorKnight, Enabled);
    SetSpEffect(entity_MirrorKnight, 160741901); // Add damage reduction to Mirror Knight
    ForceAnimationPlayback(entity_MirrorKnight, 1500, false, false, false, 0, 1); // Play collapse anim

    WaitFixedTimeSeconds(1.5); // Wait for shield to near floor

    EndIf(EventFlag(flag_MirrorKnight_Defeated)); // End if Mirror Knight dies

    SpawnOneshotSFX(TargetEntityType.Character, entity_MirrorKnight, 800, FFX_shield_explosion); // Play shield explode VFX
    SpawnOneshotSFX(TargetEntityType.Character, entity_MirrorKnight, 801, FFX_shield_explosion); // Play shield explode VFX
    SpawnOneshotSFX(TargetEntityType.Character, entity_MirrorKnight, 802, FFX_shield_explosion); // Play shield explode VFX
    SpawnOneshotSFX(TargetEntityType.Character, entity_MirrorKnight, 803, FFX_shield_explosion); // Play shield explode VFX
    SpawnOneshotSFX(TargetEntityType.Character, entity_MirrorKnight, 804, FFX_shield_explosion); // Play shield explode VFX
    SpawnOneshotSFX(TargetEntityType.Character, entity_MirrorKnight, 805, FFX_shield_explosion); // Play shield explode VFX
    SpawnOneshotSFX(TargetEntityType.Character, entity_MirrorKnight, 806, FFX_shield_explosion); // Play shield explode VFX
    SpawnOneshotSFX(TargetEntityType.Character, entity_MirrorKnight, 807, FFX_shield_explosion); // Play shield explode VFX
    SpawnOneshotSFX(TargetEntityType.Character, entity_MirrorKnight, 808, FFX_shield_explosion); // Play shield explode VFX
    WarpCharacterAndCopyFloor(entity_MirrorKnight_MadWarrior, TargetEntityType.Character, entity_MirrorKnight, 800, entity_MirrorKnight); // Warp Mad Warrior to shield position

    // Enable Mad Warrior
    SetCharacterAIState(entity_MirrorKnight_MadWarrior, Enabled);
    ChangeCharacterEnableState(entity_MirrorKnight_MadWarrior, Enabled);
    SetCharacterAnimationState(entity_MirrorKnight_MadWarrior, Enabled);

    ForceAnimationPlayback(entity_MirrorKnight, 700, true, false, false, 0, 1); // Play kneel anin for Mirror Knight
    ClearSpEffect(entity_MirrorKnight, 11301); // Remove Lightning VFX on sword

    WaitFixedTimeSeconds(1.0);

    EndIf(EventFlag(flag_MirrorKnight_Defeated)); // End if Mirror Knight dies

    // Mirror Knight cooldown period
    WaitFixedTimeSeconds(timer_MirrorKnightCooldown);

    EndIf(EventFlag(flag_MirrorKnight_Defeated)); // End if Mirror Knight dies

    ForceAnimationPlayback(entity_MirrorKnight, 1700, true, false, false, 0, 1); // Play stand anim for Mirror Knight
    ClearSpEffect(entity_MirrorKnight, 160741901); // Remove damage reduction
    SetSpEffect(entity_MirrorKnight, 11301); // Add Lightning VFX on sword

    // Restart Mirror Knight
    SetCharacterAIState(entity_MirrorKnight, Enabled);
    SetCharacterAnimationState(entity_MirrorKnight, Enabled);

    // Wait for Mad Warrior to die
    WaitFor(CharacterDead(entity_MirrorKnight_MadWarrior));

    EndIf(EventFlag(flag_MirrorKnight_Defeated)); // End if Mirror Knight dies

    // -----------
    // Hallowed Knight
    // -----------
    WaitFor(HPRatio(entity_MirrorKnight) <= percent_HallowedKnightStage);

    // Stop the Mirror Knight
    SetCharacterAIState(entity_MirrorKnight, Disabled);
    SetCharacterAnimationState(entity_MirrorKnight, Enabled);
    ChangeCharacterEnableState(entity_MirrorKnight, Enabled);
    SetSpEffect(entity_MirrorKnight, 160741901); // Add damage reduction to Mirror Knight
    ForceAnimationPlayback(entity_MirrorKnight, 1500, false, false, false, 0, 1); // Play collapse anim

    WaitFixedTimeSeconds(1.5); // Wait for shield to near floor

    EndIf(EventFlag(flag_MirrorKnight_Defeated)); // End if Mirror Knight dies

    SpawnOneshotSFX(TargetEntityType.Character, entity_MirrorKnight, 800, FFX_shield_explosion); // Play shield explode VFX
    SpawnOneshotSFX(TargetEntityType.Character, entity_MirrorKnight, 801, FFX_shield_explosion); // Play shield explode VFX
    SpawnOneshotSFX(TargetEntityType.Character, entity_MirrorKnight, 802, FFX_shield_explosion); // Play shield explode VFX
    SpawnOneshotSFX(TargetEntityType.Character, entity_MirrorKnight, 803, FFX_shield_explosion); // Play shield explode VFX
    SpawnOneshotSFX(TargetEntityType.Character, entity_MirrorKnight, 804, FFX_shield_explosion); // Play shield explode VFX
    SpawnOneshotSFX(TargetEntityType.Character, entity_MirrorKnight, 805, FFX_shield_explosion); // Play shield explode VFX
    SpawnOneshotSFX(TargetEntityType.Character, entity_MirrorKnight, 806, FFX_shield_explosion); // Play shield explode VFX
    SpawnOneshotSFX(TargetEntityType.Character, entity_MirrorKnight, 807, FFX_shield_explosion); // Play shield explode VFX
    SpawnOneshotSFX(TargetEntityType.Character, entity_MirrorKnight, 808, FFX_shield_explosion); // Play shield explode VFX
    WarpCharacterAndCopyFloor(entity_MirrorKnight_HallowedKnight, TargetEntityType.Character, entity_MirrorKnight, 800, entity_MirrorKnight); // Warp Mad Warrior to shield position

    // Enable Mad Warrior
    SetCharacterAIState(entity_MirrorKnight_HallowedKnight, Enabled);
    ChangeCharacterEnableState(entity_MirrorKnight_HallowedKnight, Enabled);
    SetCharacterAnimationState(entity_MirrorKnight_HallowedKnight, Enabled);

    ForceAnimationPlayback(entity_MirrorKnight, 700, true, false, false, 0, 1); // Play kneel anin for Mirror Knight
    ClearSpEffect(entity_MirrorKnight, 11301); // Remove Lightning VFX on sword

    // Mirror Knight cooldown period
    WaitFixedTimeSeconds(timer_MirrorKnightCooldown);

    EndIf(EventFlag(flag_MirrorKnight_Defeated)); // End if Mirror Knight dies

    ForceAnimationPlayback(entity_MirrorKnight, 1700, true, false, false, 0, 1); // Play stand anim for Mirror Knight
    ClearSpEffect(entity_MirrorKnight, 160741901); // Remove damage reduction
    SetSpEffect(entity_MirrorKnight, 11301); // Add Lightning VFX on sword

    // Restart Mirror Knight
    SetCharacterAIState(entity_MirrorKnight, Enabled);
    SetCharacterAnimationState(entity_MirrorKnight, Enabled);

    EndEvent();
});

// ----------------------------------------
// Phantoms
// ----------------------------------------
$Event(13417000, Default, function() {

});

// ----------------------------------------
// Spell Summons
// ----------------------------------------
$Event(13417100, Default, function() {
    // Skeleton
    InitializeCommonEvent(20080000, 3410710); // Setup
    InitializeCommonEvent(20080001, 3410710); // Bonfire Rest
    InitializeCommonEvent(20080002, 3410710); // Tools
    InitializeCommonEvent(20080003, 3410710); // Effects
    InitializeCommonEvent(20080004, 3410710, 160760000, 160760210, 34, 1); // Summoning

    // Hollow
    InitializeCommonEvent(20080000, 3410711); // Setup
    InitializeCommonEvent(20080001, 3410711); // Bonfire Rest
    InitializeCommonEvent(20080002, 3410711); // Tools
    InitializeCommonEvent(20080003, 3410711); // Effects
    InitializeCommonEvent(20080004, 3410711, 160760001, 160760210, 34, 1); // Summoning

    // Hound
    InitializeCommonEvent(20080000, 3410712); // Setup
    InitializeCommonEvent(20080001, 3410712); // Bonfire Rest
    InitializeCommonEvent(20080002, 3410712); // Tools
    InitializeCommonEvent(20080003, 3410712); // Effects
    InitializeCommonEvent(20080004, 3410712, 160760002, 160760210, 34, 1); // Summoning

    // Carthus Warrior
    InitializeCommonEvent(20080000, 3410713); // Setup
    InitializeCommonEvent(20080001, 3410713); // Bonfire Rest
    InitializeCommonEvent(20080002, 3410713); // Tools
    InitializeCommonEvent(20080003, 3410713); // Effects
    InitializeCommonEvent(20080004, 3410713, 160760003, 160760210, 34, 1); // Summoning

    // Lothric Knight
    InitializeCommonEvent(20080000, 3410714); // Setup
    InitializeCommonEvent(20080001, 3410714); // Bonfire Rest
    InitializeCommonEvent(20080002, 3410714); // Tools
    InitializeCommonEvent(20080003, 3410714); // Effects
    InitializeCommonEvent(20080004, 3410714, 160760004, 160760210, 34, 1); // Summoning

    // Lycanthrope
    InitializeCommonEvent(20080000, 3410715); // Setup
    InitializeCommonEvent(20080001, 3410715); // Bonfire Rest
    InitializeCommonEvent(20080002, 3410715); // Tools
    InitializeCommonEvent(20080003, 3410715); // Effects
    InitializeCommonEvent(20080004, 3410715, 160760005, 160760210, 34, 1); // Summoning

    // Black Knight
    InitializeCommonEvent(20080000, 3410716); // Setup
    InitializeCommonEvent(20080001, 3410716); // Bonfire Rest
    InitializeCommonEvent(20080002, 3410716); // Tools
    InitializeCommonEvent(20080003, 3410716); // Effects
    InitializeCommonEvent(20080004, 3410716, 160760006, 160760210, 34, 1); // Summoning

    // Abyss Watcher
    InitializeCommonEvent(20080000, 3410717); // Setup
    InitializeCommonEvent(20080001, 3410717); // Bonfire Rest
    InitializeCommonEvent(20080002, 3410717); // Tools
    InitializeCommonEvent(20080003, 3410717); // Effects
    InitializeCommonEvent(20080004, 3410717, 160760007, 160760210, 34, 1); // Summoning

    // Stone Gargoyle
    InitializeCommonEvent(20080000, 3410718); // Setup
    InitializeCommonEvent(20080001, 3410718); // Bonfire Rest
    InitializeCommonEvent(20080002, 3410718); // Tools
    InitializeCommonEvent(20080003, 3410718); // Effects
    InitializeCommonEvent(20080004, 3410718, 160760008, 160760210, 34, 1); // Summoning

    // Skeleton Unique
    InitializeCommonEvent(20080010, 3410710);
    InitializeCommonEvent(20080011, 3410710);
    InitializeCommonEvent(20080012, 3410710);

    // Hollow Unique
    InitializeCommonEvent(20080020, 3410711);
    InitializeCommonEvent(20080021, 3410711);
    InitializeCommonEvent(20080022, 3410711);

    // Hound Unique
    InitializeCommonEvent(20080030, 3410712);
    InitializeCommonEvent(20080031, 3410712);
    InitializeCommonEvent(20080032, 3410712);

    // Warrior Unique
    InitializeCommonEvent(20080040, 3410713);
    InitializeCommonEvent(20080041, 3410713);
    InitializeCommonEvent(20080042, 3410713);

    // Lothric Knight Unique
    InitializeCommonEvent(20080050, 3410714);
    InitializeCommonEvent(20080051, 3410714);
    InitializeCommonEvent(20080052, 3410714);

    // Lycanthrope Unique
    InitializeCommonEvent(20080060, 3410715);
    InitializeCommonEvent(20080061, 3410715);
    InitializeCommonEvent(20080062, 3410715);

    // Black Knight Unique
    InitializeCommonEvent(20080070, 3410716);
    InitializeCommonEvent(20080071, 3410716);
    InitializeCommonEvent(20080072, 3410716);

    // Abyss Watcher Unique
    InitializeCommonEvent(20080080, 3410717);
    InitializeCommonEvent(20080081, 3410717);
    InitializeCommonEvent(20080082, 3410717);

    // Gargoyle Unique
    InitializeCommonEvent(20080090, 3410718);
    InitializeCommonEvent(20080091, 3410718);
    InitializeCommonEvent(20080092, 3410718);
});
