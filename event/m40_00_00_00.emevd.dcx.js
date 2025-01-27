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
    // Core
    InitializeEvent(0, 14007000, 0);
    
    // Corrupted Gundyr
    InitializeEvent(0, 14005900, 0, $LAYERS(0)); // Corrupted Gundyr - Setup
    InitializeEvent(0, 14005901, 0, $LAYERS(0)); // Corrupted Gundyr - Kill
    InitializeEvent(0, 14005902, 0, $LAYERS(0)); // Corrupted Gundyr - Fogwalls
    InitializeEvent(0, 14005903, 0, $LAYERS(0)); // Corrupted Gundyr - Invalidation

    InitializeCommonEvent(20005840, 4001820, $LAYERS(0)); // Fogwall - Cemetery Side
    InitializeCommonEvent(20005841, 4001820, $LAYERS(0)); // Fogwall - Cemetery Side
    InitializeCommonEvent(20005840, 4001820, $LAYERS(0)); // Fogwall - Firelink Side
    InitializeCommonEvent(20005841, 4001820, $LAYERS(0)); // Fogwall - Firelink Side
    
    // Champion Gundyr
    InitializeEvent(0, 14005830, 0, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Champion Gundyr Kill
    InitializeEvent(0, 14005840, 0, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Champion Gundyr - Setup Boss
    InitializeEvent(0, 14005841, 0, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Champion Gundur - Phase Change
    InitializeEvent(0, 14000859, 0, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Champion Gundyr - Fogwalls

    InitializeCommonEvent(20005840, 4001800, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Fogwall - Cemetery Side
    InitializeCommonEvent(20005841, 4001800, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Fogwall - Cemetery Side
    InitializeCommonEvent(20005840, 4001810, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Fogwall - Firelink Side
    InitializeCommonEvent(20005841, 4001810, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Fogwall - Firelink Side

    // Fire Keeper - Set Flags on Death
    InitializeCommonEvent(20006002, 4000700, 1018, 1015, 1019, $LAYERS(0));
    // Fire Keeper - Eyes of a Fire Keeper
    InitializeEvent(0, 14005602, 4000700, 60200, $LAYERS(0));
    // Fire Keeper - Eyes of a Fire Keeper Dialogue
    InitializeEvent(0, 14000603, 14000410, 74000132, $LAYERS(0));
    // Fire Keeper - Walk To Bonfire Event
    InitializeEvent(0, 14005604, 4000700, 4002702, $LAYERS(0));
    // Fire Keeper - Gesture Response
    InitializeEvent(0, 14005605, 4000700, 12500, 20005, $LAYERS(0));
    // Fire Keeper - Gesture Response
    InitializeEvent(1, 14005605, 4000700, 12501, 20006, $LAYERS(0));
    // Fire Keeper - Gesture Response
    InitializeEvent(2, 14005605, 4000700, 12502, 20007, $LAYERS(0));
    // Fire Keeper - Gesture Response
    InitializeEvent(3, 14005605, 4000700, 12503, 20008, $LAYERS(0));
    // Fire Keeper - Sound State
    InitializeEvent(0, 14005615, 4000700, $LAYERS(0));
    // Fire Keeper - 
    InitializeEvent(0, 14005616, 4000700, $LAYERS(0));
    // Fire Keeper - Level Up Event
    InitializeCommonEvent(20006005, 4000700, 74000135, 74000137, 0, 1067030938, 90250, 90260, 155, $LAYERS(0));
    // Fire Keeper - Sitting Event
    InitializeCommonEvent(20006006, 4000700, 74000136, 74000138, 20000, 20001, 1, 0, $LAYERS(0));
    // Fire Keeper - Warp to Sit Spot
    InitializeCommonEvent(20006040, 4000700, 4002703, 153, $LAYERS(0));
    // Fire Keeper - Warp to Stand Spot
    InitializeCommonEvent(20006040, 4000700, 4002700, 151, $LAYERS(0));

    // Ludleth - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000705, 1038, 1035, 1039, $LAYERS(0));

    // Andre - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000710, 1178, 1175, 1179, $LAYERS(0));
    // Andre - Smithing Animation
    InitializeEvent(0, 14005661, 4000710, $LAYERS(0));

    // Shrine Handmaid - Set Flags if Dead
    InitializeEvent(0, 14005682, 4000715, 1198, 1195, 1199, $LAYERS(0));
    // Shrine Handmaid - Set Ash flags
    InitializeEvent(0, 14005681, 0, $LAYERS(0));
    // Shrine Handmaid - 
    InitializeEvent(0, 14005684, 70000119, $LAYERS(0));
    // Shrine Handmaid - Flags set via Ash turn-ins
    InitializeCommonEvent(20006020, 70000125, 70000102, $LAYERS(0));
    InitializeCommonEvent(20006020, 70000126, 70000106, $LAYERS(0));
    InitializeCommonEvent(20006020, 70000127, 70000104, $LAYERS(0));
    InitializeCommonEvent(20006020, 70000128, 70000175, $LAYERS(0));
    InitializeCommonEvent(20006020, 70000129, 70000110, $LAYERS(0));
    InitializeCommonEvent(20006020, 70000130, 70000115, $LAYERS(0));
    InitializeCommonEvent(20006020, 70000131, 70000103, $LAYERS(0));
    InitializeCommonEvent(20006020, 70000107, 70000116, $LAYERS(0));
    InitializeCommonEvent(20006020, 70000132, 70000108, $LAYERS(0));
    InitializeCommonEvent(20006020, 70000133, 70000115, $LAYERS(0));
    // Shrine Handmaid - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000716, 1618, 1615, 1619);

    // Greirat - Set Flags on Death
    InitializeCommonEvent(20006002, 4000720, 1218, 1215, 1219, $LAYERS(0));
    // Greirat - Set Hostility
    InitializeCommonEvent(20006000, 4000720, 1216, 1217, 74000330, 1059481190, 1215, 1219, 0, $LAYERS(0));
    // Greirat - Hostility Cooldown
    InitializeCommonEvent(20006001, 4000720, 1216, 1217, 74000330, 3, $LAYERS(0));
    // Greirat - Toggle Lothric Castle Pillage state
    InitializeCommonEvent(20006020, 70000153, 70000152, $LAYERS(0));

    // Irina - Place 1 - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000725, 1298, 1295, 1299, $LAYERS(0));
    // Irina - Place 2 - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000726, 1298, 1295, 1299, $LAYERS(0));
    // Irina - Place 3 - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000727, 1298, 1295, 1299, $LAYERS(0));
    // Irina - Touch Event
    InitializeCommonEvent(20006005, 4000725, 74000383, 74000384, 0, 1065353216, 90280, 90291, -1, $LAYERS(0));
    // Irina - First meeting situp
    InitializeEvent(0, 14005722, 4000726, 90641, $LAYERS(0));
    // Irina - Touch Event
    InitializeCommonEvent(20006005, 4000726, 74000386, 74000387, 0, 1065353216, 90280, 90291, -1, $LAYERS(0));
    // Irina - Spawn Control and Sitting Animation
    InitializeEvent(0, 14005723, 4000726, 74000381, 1295, 1284, 1282, 1280, 1294, 4000725, 90550, $LAYERS(0));
    // Irina - Spawn Control and Sitting Animation
    InitializeEvent(1, 14005723, 4000726, 74000382, 1295, 1285, 1283, 1280, 1294, 4000725, 90550, $LAYERS(0));
    // Irina - Bell Tower Talk Radius
    InitializeCommonEvent(20006031, 74000393, 4002727, $LAYERS(0));
    // Irina - Touch Event
    InitializeCommonEvent(20006005, 4000727, 74000389, 74000391, 4002728, 0, 90250, 90260, 155, $LAYERS(0));
    // Irina - Sitting Event
    InitializeCommonEvent(20006006, 4000727, 74000390, 74000392, 90610, 90620, 0, 0, $LAYERS(0));

    // Yoel - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000730, 1078, 1075, 1079, $LAYERS(0));
    // Yoel - Draw True Strength Event (Player)
    InitializeCommonEvent(20006005, 4000730, 74000430, 74000432, 0, 1075000115, 90250, 90260, 155, $LAYERS(0));
    // Yoel - Draw True Strength Event (NPC)
    InitializeCommonEvent(20006006, 4000730, 74000431, 74000433, 20001, 20002, 1, 1060320051, $LAYERS(0));

    // Cornyx - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000735, 1258, 1255, 1259, $LAYERS(0));
    // Cornyx - Set Hostility
    InitializeCommonEvent(20006000, 4000735, 1256, 1257, 74000470, 1059481190, 1255, 1259, 0, $LAYERS(0));
    // Cornyx - Hostility Cooldown
    InitializeCommonEvent(20006001, 4000735, 1256, 1257, 74000470, 3, $LAYERS(0));

    // Karla - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000740, 1278, 1275, 1279, $LAYERS(0));

    // Orbeck - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000745, 1238, 1235, 1239, $LAYERS(0));
    // Orbeck - Set Hostility
    InitializeCommonEvent(20006000, 4000745, 1236, 1237, 74000580, 1059481190, 1235, 1239, 0, $LAYERS(0));
    // Orbeck - Hostility Cooldown
    InitializeCommonEvent(20006001, 4000745, 1236, 1237, 74000580, 3, $LAYERS(0));

    // Yuria - Set Flags if Dead
    InitializeCommonEvent(20006002, 4000750, 1058, 1055, 1059, $LAYERS(0));
    // Yuria - Hostility Cooldown
    InitializeCommonEvent(20006001, 4000750, 1056, 1057, 74000630, 3, $LAYERS(0));
    // Yuria - 
    InitializeEvent(0, 14000522, 0, $LAYERS(0));
    // Yuria - 
    InitializeEvent(0, 14005521, 4000750, 1056, 1057, 74000630, 1059481190, 1055, 1059, 0, $LAYERS(0));

    // Eygon - 
    InitializeCommonEvent(20006002, 4000755, 1318, 1315, 1319, $LAYERS(0));
    // Eygon - 
    InitializeCommonEvent(20006000, 4000755, 1316, 1317, 74000680, 1059481190, 1315, 1319, 0, $LAYERS(0));
    // Eygon - 
    InitializeCommonEvent(20006001, 4000755, 1316, 1317, 74000680, 3, $LAYERS(0));
    // Eygon - 
    InitializeCommonEvent(20006002, 4000756, 1318, 1315, 1319, $LAYERS(0));
    // Eygon - 
    InitializeEvent(0, 14005541, 4000755, 1316, 1317, 1281, 1284, 1298, 1315, 1319, 1302, $LAYERS(0));
    // Eygon - 
    InitializeEvent(0, 14005542, 4000755, 4000756, 4000725, 4000726, 90640, $LAYERS(0));
    // Eygon - 
    InitializeEvent(0, 14005543, 4000756, $LAYERS(0));

    // Crows - 
    InitializeEvent(0, 14000490, 0, $LAYERS(0));
    // Crows - 
    InitializeEvent(0, 14000491, 0, $LAYERS(0));

    // Anri (Male) - 
    InitializeEvent(0, 14005581, 4000765, 4000770, 4000775, 74000730, 74000731, 1059481190, $LAYERS(0));
    // Anri (Male) - 
    InitializeEvent(0, 14000583, 4000765, 4000770, 1356, 1357, 4000775, 1355, 1359, 1342, $LAYERS(0));
    // Anri (Male) - 
    InitializeEvent(0, 14005584, 4000765, 4000770, 1357, 1342, $LAYERS(0));
    // Anri (Male) - 
    InitializeCommonEvent(20006001, 4000765, 1356, 1357, 74000730, 3, $LAYERS(0));
    // Anri (Male) - 
    InitializeCommonEvent(20006002, 4000765, 1358, 1355, 1359, $LAYERS(0));
    // Anri (Male) - 
    InitializeEvent(0, 14005587, 4000765, 1342, 1357, $LAYERS(0));

    // Anri (Female) - 
    InitializeCommonEvent(20006001, 4000770, 1356, 1357, 74000730, 3, $LAYERS(0));
    // Anri (Female) - 
    InitializeCommonEvent(20006002, 4000770, 1358, 1355, 1359, $LAYERS(0));
    // Anri (Female) - 
    InitializeEvent(1, 14005587, 4000770, 1342, 1357, $LAYERS(0));

    // Horace the Hushed - 
    InitializeCommonEvent(20006001, 4000775, 1496, 1497, 74000731, 3, $LAYERS(0));
    // Horace the Hushed - 
    InitializeCommonEvent(20006002, 4000775, 1498, 1495, 1499, $LAYERS(0));
    // Horace the Hushed - 
    InitializeEvent(0, 14000585, 4000775, 1496, 1497, 4000765, 4000770, 1495, 1499, 1482, $LAYERS(0));

    // Hawkwood - 
    InitializeCommonEvent(20006002, 4000760, 1118, 1115, 1119, $LAYERS(0));
    // Hawkwood - 
    InitializeCommonEvent(20006000, 4000760, 1116, 1117, 74000830, 1059481190, 1115, 1119, 0, $LAYERS(0));
    // Hawkwood - 
    InitializeCommonEvent(20006001, 4000760, 1116, 1117, 74000830, 3, $LAYERS(0));
    // Hawkwood - 
    InitializeCommonEvent(20006030, 4001760, 4000, 2, 60730, 50006074, 50006074, 74000825, $LAYERS(0));
    // Hawkwood -
    InitializeCommonEvent(20006002, 4000761, 1118, 1115, 1119, $LAYERS(0));
    // Hawkwood -
    InitializeCommonEvent(20006000, 4000761, 1116, 1117, 74000831, 1059481190, 1115, 1119, 0, $LAYERS(0));
    // Hawkwood -
    InitializeCommonEvent(20006001, 4000761, 1116, 1117, 74000831, 3, $LAYERS(0));

    // Sirris - 
    InitializeCommonEvent(20006002, 4000780, 1138, 1135, 1139, $LAYERS(0));

    // Leonhard - 
    InitializeCommonEvent(20006002, 4000785, 1158, 1155, 1159, $LAYERS(0));
    // Leonhard - 
    InitializeCommonEvent(20006000, 4000785, 1156, 1157, 74000880, 1059481190, 1155, 1159, 0, $LAYERS(0));
    // Leonhard - 
    InitializeCommonEvent(20006001, 4000785, 1156, 1157, 74000880, 3, $LAYERS(0));

    // Unbreakable Patches - 
    InitializeCommonEvent(20006002, 4000791, 1378, 1375, 1379, $LAYERS(0));
    // Unbreakable Patches - 
    InitializeCommonEvent(20006000, 4000791, 1376, 1377, 73500290, 1059481190, 1375, 1379, 0, $LAYERS(0));
    // Unbreakable Patches - 
    InitializeCommonEvent(20006001, 4000791, 1376, 1377, 73500290, 3, $LAYERS(0));

    // Unbreakable Patches - 
    InitializeEvent(0, 14000621, 4000790, $LAYERS(0));
    // Unbreakable Patches - 
    InitializeEvent(0, 14000622, 4000790, 4000791, 4004791, $LAYERS(0));
    // Unbreakable Patches - 
    InitializeEvent(0, 14000624, 4000791, $LAYERS(0));

    // Enemy - Wake-up
    InitializeCommonEvent(20005120, 4000202, 1091043328);
    InitializeCommonEvent(20005210, 4000204, 703, 1703, 1091043328); // Enemy - Wake-up
    InitializeCommonEvent(20005132, 4000205, 1092616192, 4002205); // Enemy - Wake-up
    InitializeCommonEvent(20005132, 4000207, 1065353216, 4002207); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000211, 4002248); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000212, 703, 1703, 1082130432); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000213, 705, 1705, 4002213); // Enemy - Wake-up
    InitializeCommonEvent(20005150, 4000215); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000216, 703, 1703, 4002216); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000217, 703, 1703, 4002216); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000218, 706, 1706, 4002218); // Enemy - Wake-up
    InitializeCommonEvent(20005200, 4000219, 706, 1706, 4002216); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000239, 703, 1703, 1082130432); // Enemy - Wake-up
    InitializeCommonEvent(20005120, 4000240, 1097859072); // Enemy - Wake-up
    InitializeCommonEvent(20005220, 4000241, 706, 1706); // Enemy - Wake-up
    InitializeCommonEvent(20005290, 4000242, 705, 1705); // Enemy - Wake-up
    InitializeCommonEvent(20005220, 4000243, 703, 1703); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000244, 4002244); // Enemy - Wake-up
    InitializeCommonEvent(20005292, 4000245, 703, 1703); // Enemy - Wake-up
    InitializeCommonEvent(20005290, 4000246, 703, 1703); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000247, 4002248); // Enemy - Wake-up
    InitializeCommonEvent(20005220, 4000251, 703, 1703); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000252, 705, 1705, 1073741824); // Enemy - Wake-up 
    InitializeCommonEvent(20005210, 4000253, 703, 1703, 1095761920); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000255, 703, 1703, 1084227584, 1065353216); // Enemy - Wake-up
    InitializeCommonEvent(20005415, 14000290, 4000250, 4000290, 703, 1703, 4002290, 14004290, 14005290, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Pus of Man Setup
    InitializeCommonEvent(20005416, 14000290, 4000250, 4000290, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Pus of Man
    InitializeCommonEvent(20005120, 4000301, 1107296256, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005132, 4000303, 1065353216, 4002303, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000320, 4002320, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000330, 4002330, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005110, 4000331, 4002330, $LAYERS(1)); // Enemy - Wake-up
    InitializeEvent(0, 14005300, 4000330, 4002360); // Cathedral Grave Warden - Set Home
    InitializeCommonEvent(20005240, 4000341, 702, 1702, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000342, 702, 1702, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000343, 701, 1701, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005120, 4000346, 1087373312, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000349, 700, 1700, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000350, 700, 1700, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000351, 700, 1700, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005223, 4000352, 700, 1700, 1073741824, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005210, 4000355, 700, 1700, 1086324736, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000356, 700, 1700, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005240, 4000357, 700, 1700, 12140, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000360, 701, 1701, 1084227584, 0, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000361, 701, 1701, 1084227584, 0, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000362, 701, 1701, 1084227584, 0, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000363, 701, 1701, 1084227584, 0, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000364, 701, 1701, 1084227584, 0, $LAYERS(1)); // Enemy - Wake-up
    InitializeCommonEvent(20005211, 4000365, 701, 1701, 1084227584, 0, $LAYERS(1)); // Enemy - Wake-up

    // Firelink Shrine - Place Sword
    InitializeEvent(0, 14005440, 0, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9));

    // Ladders
    InitializeEvent(0, 14005420, 0); // Setup Ladders
    InitializeCommonEvent(20005640, 14000426, 4001426, 14005426, 14005427, $LAYERS(0)); // Setup Kick Ladder

    // Lifts
    InitializeCommonEvent(20005620, 14000400, 14001400, 4001400, 4001401, 4001402, 14001401); // Bell Tower Lift
    InitializeEvent(0, 14005401, 0); // Setup Bell Tower Lift

    // Doors
    InitializeCommonEvent(20005610, 14000410, 4002410, 4002411);
    InitializeCommonEvent(20005613, 14000425, 4003250, 4001250, 3400340, 10010873);

    InitializeEvent(0, 14005481, 0); // Disable Loading Tips in Cemetery of Ash
    InitializeEvent(0, 14005110, 0, $LAYERS(0)); // Warp to Flameless Shrine

    InitializeEvent(0, 14005102, 0); // Object Toggle in Firelink Shrine (COA and UG)
    InitializeEvent(0, 14000120, 9210, 9211, 9212, 9213, 9214, 9215); // Check Lords of Cinder completion
    InitializeEvent(0, 14000121, 9211, 2126, 4001111, 4001121, 9353, 69050, $LAYERS(0)); // Handle Lord of Cinder placement
    InitializeEvent(2, 14000121, 9212, 2124, 4001112, 4001122, 9353, 69040, $LAYERS(0)); // Handle Lord of Cinder placement
    InitializeEvent(4, 14000121, 9213, 2123, 4001113, 4001123, 9353, 69040, $LAYERS(0)); // Handle Lord of Cinder placement
    InitializeEvent(6, 14000121, 9214, 2125, 4001114, 4001124, 9353, 69050, $LAYERS(0)); // Handle Lord of Cinder placement

    // Throne prompts
    InitializeEvent(1, 14005484, 10012051, 4001141);
    InitializeEvent(2, 14005484, 10012052, 4001142);
    InitializeEvent(3, 14005484, 10012053, 4001143);
    InitializeEvent(4, 14005484, 10012054, 4001144);
    InitializeEvent(5, 14005484, 10012055, 4001145);

    // Crow Trades
    InitializeEvent(0, 14005821, 0, $LAYERS(0));

    // Giant Tree Seed Drop
    InitializeEvent(0, 14005460, 0);

    // Firelink Shrine Music
    InitializeEvent(0, 14005450, 0, $LAYERS(0));

    // Disable Map Sound States
    InitializeEvent(0, 1405451, 0, $LAYERS(1));

    // Area Welcome Message - Untended Graves
    InitializeEvent(0, 14005470, 0, $LAYERS(1));

    // Area Welcome Message - Disable
    InitializeEvent(0, 14005471, 0, $LAYERS(1));

    // Area Welcome Message - Enable
    InitializeEvent(0, 14005472, 0, $LAYERS(1));

    // Area Welcome Message - Enable
    InitializeEvent(0, 14005473, 0, $LAYERS(1));

    // Area Welcome Message - Enable
    InitializeEvent(0, 14005474, 0, $LAYERS(1));

    // Area Welcome Message - The Abyss
    InitializeEvent(0, 14005475, 0, $LAYERS(1));

    // Toggle Message Visbility
    InitializeEvent(0, 14005445, 0);

    // Setup Light Sources
    InitializeEvent(0, 14005441, 0, $LAYERS(0));

    // Debug Character (for AI testing)
    InitializeEvent(0, 14006000, 0);
});

//---------------------------------------------
// Destructor
//---------------------------------------------
$Event(50, Default, function() {
    // Toggle Firelink Floor Hit 
    InitializeEvent(0, 14005103, 0, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Toggle Firelink Floor Hit (Untended Graves)
    InitializeEvent(0, 14005104, 0, $LAYERS(1, 2, 3, 4, 5, 6, 7, 8, 9));
    // Set Event Flag
    InitializeEvent(0, 14005618, 0, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));

    // Fire Keeper - Spawn State
    InitializeEvent(0, 14005600, 4000700, 4002701, 4002703, 4002700, 4002702, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Ludleth - Spawn State
    InitializeEvent(0, 14005640, 4000705, 4001115, 4000706, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Andre - Spawn State
    InitializeEvent(0, 14005660, 4000710, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Shrine Handmaid - Spawn State
    InitializeEvent(0, 14005680, 4000715, 4002715, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Shrine Handmaid (Untended Graves) - Spawn State
    InitializeEvent(0, 14005683, 4000716, 4002715);
    // Irina - Spawn State
    InitializeEvent(0, 14005720, 4000725, 4000726, 4000727, 90550, 90640, 90730, 4004725, 4004726, 4004727, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Yoel - Spawn State
    InitializeEvent(0, 14005740, 4000730, 2160, 4004730, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Cornyx - Spawn State
    InitializeEvent(0, 14005760, 4000735, 4006735, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Karla - Spawn State
    InitializeEvent(0, 14005780, 4000740, 90460, 4001740, 4004740, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Orbeck - Spawn State
    InitializeEvent(0, 14005500, 4000745, 90420, 4001745, 4004745, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Yuria - Spawn State
    InitializeEvent(0, 14005520, 4000750, 90300, 4004750, 4001751);
    // Eygon - Spawn State
    InitializeEvent(0, 14005540, 4000755, 4000756, 90660, 4004755, 4004756, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Hawkwood - Spawn State
    InitializeEvent(0, 14005560, 4000760, 4000761, 4004760, 4004761, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Anri - Spawn State
    InitializeEvent(0, 14005580, 4000765, 4000770, 90750, 90800, 4004765, 4004770, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Horace - Spawn State
    InitializeEvent(0, 14005586, 4000775, 90900, 4004775, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Sirris - Spawn State
    InitializeEvent(0, 14005570, 4000780, 4000781, 4004780, 4004781, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Leonhard - Spawn State
    InitializeEvent(0, 14005750, 4000785, 90710, 4004785, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Patches - Spawn State
    InitializeEvent(0, 14005620, 4000790, 4000791, 4004791, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Siegward - Handle Quest Progression
    InitializeEvent(0, 14005701, 0, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Greirat - Spawn State
    InitializeEvent(0, 14005700, 4000720, 4004720, $LAYERS(0, 3, 4, 5, 6, 7, 8, 9));
    // Set Event Flag 
    InitializeEvent(0, 14000401, 0);
    // Player Start Sequence
    InitializeEvent(0, 14000100, 0, $LAYERS(0, 2, 3, 4, 5, 6, 7, 8, 9));

    SetMapSoundState(4004800, Disabled);
    SetMapSoundState(4004801, Disabled);
    SetMapSoundState(4004830, Disabled);
    SetMapSoundState(4004831, Disabled);
    SetMapSoundState(4004450, Disabled);
    SetMapSoundState(4004460, Disabled);
    SetMapSoundState(4003700, Disabled);
    SetMapSoundState(4003701, Disabled);
    SetMapSoundState(4004820, Disabled);
    SetMapSoundState(4004825, Disabled);
});

// Untended Graves - Peer into the Past Warp
$Event(14000200, Restart, function() {
    EndIf(PlayerIsNotInOwnWorld());

    if (PlayerHasItem(ItemType.Goods, 2065)) {

L0:
        WaitFor(ActionButtonInArea(40014, 4001150));

        SetMapCeremony(40, 0, 10);
        WarpPlayer(40, 0, 4000973);
        SetPlayerRespawnPoint(4002953);
    } else {

L1:
        WaitFor(ActionButtonInArea(40014, 4001150));

        DisplayEpitaphMessage(99030730);

        Goto(L2);
    }

L2:
    RestartEvent();
});

// Horny Jail
$Event(14000056, Default, function() {
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 25008903);
    WarpPlayer(39, 0, 3904001); // Irithyll Dungeon
});

//------------------------------------------
// Training Dummy - Toggle State
// <entity id>, <spot inside id>, <spot outside id>, <enabled flag>
//------------------------------------------
$Event(14000070, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);

    // Delay check to allow flag reset to occur
    WaitFixedTimeFrames(1);

    // Wait for dummy flag
    WaitFor(EventFlag(X12_4));

    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);

    SetSpEffect(X0_4, 160810020); // Restore HP

    // Inside location
    if (!EventFlag(25009793)) {
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X4_4, 0, X4_4);
    }

    // Outside location
    if (EventFlag(25009793)) {
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, 0, X8_4);
    }

    // Reset if turned off
    WaitFor(!EventFlag(X12_4));

    RestartEvent();
});

//------------------------------------------
// Training Dummy - Aggressive - Toggle State
// <entity id>, <spot inside id>, <spot outside id>, <enabled flag>
//------------------------------------------
$Event(14000071, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);

    // Delay check to allow flag reset to occur
    WaitFixedTimeFrames(1);

    // Wait for dummy flag
    WaitFor(EventFlag(X12_4));

    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
    SetCharacterAIState(X0_4, Enabled);

    SetSpEffect(X0_4, 160810020); // Restore HP

    // Inside location
    if (!EventFlag(25009793)) {
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X4_4, 0, X4_4);
    }

    // Outside location
    if (EventFlag(25009793)) {
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, 0, X8_4);
    }

    // Reset if turned off
    WaitFor(!EventFlag(X12_4));

    RestartEvent();
});

//------------------------------------------
// Training NPC - Toggle State
// <entity id>, <spot inside id>, <spot outside id>
//------------------------------------------
$Event(14000075, Restart, function(X0_4, X4_4, X8_4) {
    // Move the dummies inside
    WarpCharacterAndCopyFloor(4000865, TargetEntityType.Area, 4002370, 0, 4002370);
    WarpCharacterAndCopyFloor(4000866, TargetEntityType.Area, 4002371, 0, 4002371);
    WarpCharacterAndCopyFloor(4000867, TargetEntityType.Area, 4002372, 0, 4002372);

    // Move NPC inside
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X4_4, 0, X4_4);

    // Delay check to allow flag reset to occur
    WaitFixedTimeFrames(1);

    // Wait for outside flag to be enabled
    WaitFor(EventFlag(25009793));

    // Move player outside
    WarpCharacterAndCopyFloor(10000, TargetEntityType.Area, 4002383, 0, 4002383);

    // Move NPC
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, 0, X8_4);

    // Move the dummies
    WarpCharacterAndCopyFloor(4000865, TargetEntityType.Area, 4002373, 0, 4002373);
    WarpCharacterAndCopyFloor(4000866, TargetEntityType.Area, 4002374, 0, 4002374);
    WarpCharacterAndCopyFloor(4000867, TargetEntityType.Area, 4002375, 0, 4002375);

    // Wait for outside flag to be disabled
    WaitFor(!EventFlag(25009793));

    // Move player inside
    WarpCharacterAndCopyFloor(10000, TargetEntityType.Area, 4002382, 0, 4002382);

    RestartEvent();
});

//------------------------------------------
// Training Dummies - Reset Flags
//------------------------------------------
$Event(14000076, Restart, function() {
    SetEventFlag(25009792, OFF);
    SetEventFlag(25009793, OFF);
});

//------------------------------------------
// El Hueso - Trigger Boss Fight
//------------------------------------------
$Event(14000077, Restart, function(X0_4) {
    SetEventFlag(74000910, OFF);
    SetEventFlag(74000915, OFF);

    SetCharacterAIState(X0_4, Disabled);

    WaitFor(HPRatio(X0_4) <= 0.2);

    SetCharacterAIState(X0_4, Enabled);
    SetSpEffect(X0_4, 160740001);

    DisplayBossHealthBar(Enabled, X0_4, 0, 204012);

    WaitFor(HPRatio(X0_4) <= 0);

    DisplayBossHealthBar(Disabled, X0_4, 0, 204012);
});

// Ellie's Pet
$Event(14000062, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(CharacterDamagedBy(X8_4, 10000));

    SetCharacterTeamType(X4_4, TeamType.StrongEnemy);
    SetCharacterTeamType(X8_4, TeamType.StrongEnemy);
    WaitFixedTimeFrames(1);
    RequestCharacterAIReplan(X4_4);
    SetCharacterAIState(X8_4, Enabled);

    RestartEvent();
});

// Remy Toggle
$Event(14000063, Default, function(X0_4, X4_4) {
    WaitFor(CharacterDamagedBy(X0_4, 10000));

    ChangeCharacterEnableState(X4_4, Disabled);
});

// Spurned Shade - Appearance
$Event(14000064, Restart, function(X0_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);

    // Defeated Corrupted Gundyr and lack a ring
    WaitFor(EventFlag(25001001));

    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
});

// Player Start Sequence
$Event(14000100, Default, function() {
    EndIf(ThisEventSlot());
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(!PlayerInMap(40, 0));

    EndIf(!MapCeremony(40, 0, 0));

    SetSpEffect(10000, 4610);
    ForceAnimationPlayback(10000, 0, false, false, false, 0, 1);
    DeactivateObject(4006440, Disabled);
    //PlayOngoingCutsceneAndWarpPlayer(40000040, CutscenePlayMode.Skippable, 4002110, 40, 0, 10000, 1, 0);

    WaitFixedTimeFrames(1);

    ForceAnimationPlayback(10000, 0, false, false, false, 0, 1);
    DeactivateObject(4006440, Enabled);
    //IfOngoingCutsceneFinished(MAIN, 40000040);
    SetNetworkInteractionState(Enabled);

    WaitFixedTimeFrames(1);

    ClearSpEffect(10000, 4610);
    SetPlayerRespawnPoint(4002950);
    SaveRequest(0);
    SetEventFlag(14000100, ON);
});

// Firelink Shrine - Coiled Sword Placement
$Event(14005101, Default, function() {
    EndIf(EventFlag(14000101));

    WaitFor(ObjectBackread(4001950));

    WaitFixedTimeFrames(1);

    ForceAnimationPlayback(4001950, 100000, true, false, false, 0, 1);
    SetEventFlag(74000010, ON);

    obj = !ObjectBackread(4001950);
    WaitFor(obj || ActionButtonInArea(9351, 4001950));
    RestartIf(obj.Passed);

    IssueShortWarpRequest(10000, TargetEntityType.Object, 4001950, 1);
    ForceAnimationPlayback(4001950, 60430, false, false, false, 0, 1);
    SetBonfireWarpingState(4001950, 60430, Enabled);
    SetEventFlag(74000010, OFF);
    SetEventFlag(14000101, ON);
    RemoveItemFromPlayer(ItemType.Goods, 2137, 1);
});

// Object Toggle in Firelink Shrine (COA and UG)
$Event(14005102, Default, function() {
    EndIf(PlayerIsNotInOwnWorld());

    DeactivateObject(4001101, Disabled);
    DeactivateObject(4001102, Disabled);

    cond &= PlayerStandingOnHit(4004100);
    flag = !EventFlag(131) && EventFlag(2051);
    WaitFor(cond || flag);

    DeleteObjectfollowingSFX(4001101, true);
    DeleteObjectfollowingSFX(4001102, true);
    DeactivateObject(4001101, Enabled);
    DeactivateObject(4001102, Enabled);
    CreateObjectfollowingSFX(4001101, 101, 840080);
    CreateObjectfollowingSFX(4001102, 101, 4);

    cond &= !EventFlag(2051) && HasMultiplayerState(MultiplayerState.LeavingSession);
    if (!flag.Passed) {
        cond &= PlayerStandingOnHit(4004101);
    }
    WaitFor(cond);
    if (!EventFlag(131) || MapCeremony(40, 0, 10)) {
        time &= ElapsedSeconds(18);
    } else {
        time &= ElapsedSeconds(20);
    }
    if (!flag.Passed) {
        hitFlag &= PlayerStandingOnHit(4004100);
    } else {
        hitFlag &= EventFlag(2051);
    }
    WaitFor(time || hitFlag);
    RestartIf(hitFlag.Passed);

    DeleteObjectfollowingSFX(4001101, true);
    DeleteObjectfollowingSFX(4001102, true);

    time2 = ElapsedSeconds(2);
    if (!flag.Passed) {
        hitFlag2 &= PlayerStandingOnHit(4004100);
    } else {
        hitFlag2 &= EventFlag(2051);
    }
    WaitFor(time2 || hitFlag2);
    RestartIf(hitFlag2.Passed);

    DeactivateObject(4001101, Disabled);
    DeactivateObject(4001102, Disabled);
    RestartEvent();
});

// Toggle Firelink Floor Hit
$Event(14005103, Default, function() {
    WaitFor(!PlayerIsNotInOwnWorld() && !EventFlag(131));

    ActivateHit(4004109, Enabled);
    ActivateHit(4004100, Disabled);
});

// Toggle Firelink Floor Hit (Untended Graves)
$Event(14005104, Default, function() {
    ActivateHit(4004109, Enabled);
    ActivateHit(4004100, Disabled);
});

// Warp to Flameless Shrine
$Event(14005110, Default, function() {
    ActivateHitres(4004100, Disabled);

    EndIf(EventFlag(14000110));
    EndIf(PlayerIsNotInOwnWorld());

    SetEventFlag(74000010, OFF);

    WaitFor((EventFlag(9210) || EventFlag(74000123)) && HPRatio(4000700) != 0);

    ActivateHitres(4004100, Enabled);

    if (!EventFlag(74000123)) {

        SetEventFlag(74000010, ON);

        hp = HPRatio(4000700) == 0;
        WaitFor(hp || ActionButtonInArea(9101, 4001950) || EventFlag(74000123));
        RestartIf(hp.Passed);
    }

L0:
    DeleteMapSFX(4003500, false);
    DeleteMapSFX(4003501, false);
    DeleteMapSFX(4003502, false);
    DeleteMapSFX(4003503, false);
    DeleteMapSFX(4003504, false);
    SetEventFlag(74000010, OFF);
    SetEventFlag(14000110, ON);
    SetEventFlag(14100000, ON);

    if (!EventFlag(1038)) {
        PlayCutsceneAndWarpPlayer(40000020, CutscenePlayMode.Skippable, 4102100, 41, 0, 10000);
    } else {
        PlayCutsceneAndWarpPlayer(40000021, CutscenePlayMode.Skippable, 4102100, 41, 0, 10000);
    }

    DeleteObjectfollowingSFX(4001500, true);
    DeleteObjectfollowingSFX(4001501, true);
    DeleteObjectfollowingSFX(4001502, true);
    DeleteObjectfollowingSFX(4001503, true);
    DeleteObjectfollowingSFX(4001510, true);
    DeleteObjectfollowingSFX(4001511, true);
    DeleteObjectfollowingSFX(4001512, true);
    DeleteObjectfollowingSFX(4001513, true);
    DeleteObjectfollowingSFX(4001514, true);
    DeleteObjectfollowingSFX(4001515, true);
    DeleteObjectfollowingSFX(4001516, true);
    DeleteObjectfollowingSFX(4001517, true);
    DeleteObjectfollowingSFX(4001518, true);
    DeleteObjectfollowingSFX(4001519, true);
    DeleteObjectfollowingSFX(4001520, true);
    DeleteObjectfollowingSFX(4001521, true);
    DeleteObjectfollowingSFX(4001522, true);
    DeleteObjectfollowingSFX(4001523, true);
    DeleteObjectfollowingSFX(4001524, true);
    DeleteObjectfollowingSFX(4001525, true);
    DeleteObjectfollowingSFX(4001526, true);
    DeleteObjectfollowingSFX(4001527, true);
    DeleteObjectfollowingSFX(4001528, true);
    DeleteObjectfollowingSFX(4001529, true);
    DeleteObjectfollowingSFX(4001530, true);
    DeleteObjectfollowingSFX(4001531, true);
    DeleteObjectfollowingSFX(4001532, true);
    DeleteObjectfollowingSFX(4001533, true);
    DeleteObjectfollowingSFX(4001534, true);
    DeleteObjectfollowingSFX(4001535, true);
    DeleteObjectfollowingSFX(4001536, true);
    DeleteObjectfollowingSFX(4001537, true);
    DeleteObjectfollowingSFX(4001538, true);
    DeleteObjectfollowingSFX(4001539, true);
    DeleteObjectfollowingSFX(4001540, true);
    DeleteObjectfollowingSFX(4001541, true);
    DeleteObjectfollowingSFX(4001542, true);
    DeleteObjectfollowingSFX(4001543, true);
    DeleteObjectfollowingSFX(4001544, true);
    DeleteObjectfollowingSFX(4001545, true);
    DeleteObjectfollowingSFX(4001546, true);
    DeleteObjectfollowingSFX(4001547, true);
    DeleteObjectfollowingSFX(4001548, true);
    DeleteObjectfollowingSFX(4001549, true);
    DeleteObjectfollowingSFX(4001550, true);
    DeleteObjectfollowingSFX(4001551, true);
    DeleteObjectfollowingSFX(4001552, true);
    DeleteObjectfollowingSFX(4001553, true);
    DeleteObjectfollowingSFX(4001554, true);
    DeleteObjectfollowingSFX(4001555, true);
    DeleteObjectfollowingSFX(4001556, true);
    DeleteObjectfollowingSFX(4001557, true);
    DeleteObjectfollowingSFX(4001558, true);
    DeleteObjectfollowingSFX(4001559, true);
    DeleteObjectfollowingSFX(4001560, true);
    DeleteObjectfollowingSFX(4001561, true);
    DeleteObjectfollowingSFX(4001562, true);
    DeleteObjectfollowingSFX(4001563, true);
    DeleteObjectfollowingSFX(4001564, true);
    DeleteObjectfollowingSFX(4001565, true);
    DeleteObjectfollowingSFX(4001566, true);
    DeleteObjectfollowingSFX(4001567, true);
    DeleteObjectfollowingSFX(4001568, true);
    DeleteObjectfollowingSFX(4001569, true);
    DeleteObjectfollowingSFX(4001570, true);
    DeleteObjectfollowingSFX(4001571, true);
    DeleteObjectfollowingSFX(4001572, true);
    SetPlayerRespawnPoint(4102100);
    SaveRequest(0);
    WaitFixedTimeFrames(1);
});

// Check Lords of Cinder completion
$Event(14000120, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(X0_4));
    EndIf(PlayerIsNotInOwnWorld());

    WaitFor(
        EventFlag(X4_4)
            && EventFlag(X8_4)
            && EventFlag(X12_4)
            && EventFlag(X16_4)
            && EventFlag(X20_4));

    SetEventFlag(X0_4, ON);
});

// Handle Lord of Cinder placement
$Event(14000121, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(PlayerIsNotInOwnWorld());

    if (EventFlag(X0_4)) {

        DeleteObjectfollowingSFX(X8_4, false);
        CreateObjectfollowingSFX(X8_4, 201, 840066);
        EndEvent();
    }

L0:
    DeactivateObject(X8_4, Disabled);

    WaitFor(
        !EventFlag(2051)
            && HasMultiplayerState(MultiplayerState.LeavingSession)
            && PlayerHasItem(ItemType.Goods, X4_4)
            && !EventFlag(X0_4)
            && ActionButtonInArea(X16_4, X12_4));

    RotateCharacter(10000, X12_4, X20_4, true);
    if (X20_4 != 69050) {

        WaitFixedTimeSeconds(0.9);
    } else {
        WaitFixedTimeSeconds(2);
    }

    SetEventFlag(X0_4, ON);
    RemoveItemFromPlayer(ItemType.Goods, X4_4, 1);
    DeactivateObject(X8_4, Enabled);
    SpawnOneshotSFX(TargetEntityType.Object, X8_4, 201, 840065);
    CreateObjectfollowingSFX(X8_4, 201, 840066);
});

// Fallen Knight - Handle Pickup
$Event(14000130, Restart, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);

    const obj_FallenKnight   = X0_4;
    const param_ItemLot      = X4_4;
    const param_ActionButton = 9355;
    const flag_ItemTaken     = X8_4;

    EndIf(PlayerIsNotInOwnWorld());
    EndIf(EventFlag(flag_ItemTaken));

    CreateObjectfollowingSFX(obj_FallenKnight, 90, 63);

    WaitFor(!PlayerIsNotInOwnWorld() && ActionButtonInArea(param_ActionButton, obj_FallenKnight));

    ForceAnimationPlayback(10000, 60070, false, false, false, 0, 1);

    AwardItemLot(param_ItemLot);

    DeleteObjectfollowingSFX(obj_FallenKnight, true);
});

// Cathedral Grave Warden - Set Home
$Event(14005300, Restart, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    }
L0:
    SetCharacterHome(X0_4, X4_4);
});

// Unknown
$Event(14000401, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlag(14000400, ON);
    EndEvent();
});

// Setup Bell Tower Lift
$Event(14005401, Restart, function() {
    InitializeCommonEvent(20005621, 14000400, 14001400, 4001400, 4001401, 4003401, 4001402, 4003402, 4002401, 4002402, 14001401, 14004400, 0);
});

// Setup Ladders
$Event(14005420, Restart, function() {
    RegisterLadder(14000420, 14000421, 4001420);
});

// Firelink Shrine - Place Sword
$Event(14005440, Restart, function() {
    WaitFor(ObjectBackread(4001955));
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(4001955, 100000, false, false, false, 0, 1);
});

// Setup Light Sources
$Event(14005441, Restart, function() {
    DeleteObjectfollowingSFX(4001500, false);
    DeleteObjectfollowingSFX(4001501, false);
    DeleteObjectfollowingSFX(4001502, false);
    DeleteObjectfollowingSFX(4001503, false);
    DeleteObjectfollowingSFX(4001510, false);
    DeleteObjectfollowingSFX(4001511, false);
    DeleteObjectfollowingSFX(4001512, false);
    DeleteObjectfollowingSFX(4001513, false);
    DeleteObjectfollowingSFX(4001514, false);
    DeleteObjectfollowingSFX(4001515, false);
    DeleteObjectfollowingSFX(4001516, false);
    DeleteObjectfollowingSFX(4001517, false);
    DeleteObjectfollowingSFX(4001518, false);
    DeleteObjectfollowingSFX(4001519, false);
    DeleteObjectfollowingSFX(4001520, false);
    DeleteObjectfollowingSFX(4001521, false);
    DeleteObjectfollowingSFX(4001522, false);
    DeleteObjectfollowingSFX(4001523, false);
    DeleteObjectfollowingSFX(4001524, false);
    DeleteObjectfollowingSFX(4001525, false);
    DeleteObjectfollowingSFX(4001526, false);
    DeleteObjectfollowingSFX(4001527, false);
    DeleteObjectfollowingSFX(4001528, false);
    DeleteObjectfollowingSFX(4001529, false);
    DeleteObjectfollowingSFX(4001530, false);
    DeleteObjectfollowingSFX(4001531, false);
    DeleteObjectfollowingSFX(4001532, false);
    DeleteObjectfollowingSFX(4001533, false);
    DeleteObjectfollowingSFX(4001534, false);
    DeleteObjectfollowingSFX(4001535, false);
    DeleteObjectfollowingSFX(4001536, false);
    DeleteObjectfollowingSFX(4001537, false);
    DeleteObjectfollowingSFX(4001538, false);
    DeleteObjectfollowingSFX(4001539, false);
    DeleteObjectfollowingSFX(4001540, false);
    DeleteObjectfollowingSFX(4001541, false);
    DeleteObjectfollowingSFX(4001542, false);
    DeleteObjectfollowingSFX(4001543, false);
    DeleteObjectfollowingSFX(4001544, false);
    DeleteObjectfollowingSFX(4001545, false);
    DeleteObjectfollowingSFX(4001546, false);
    DeleteObjectfollowingSFX(4001547, false);
    DeleteObjectfollowingSFX(4001548, false);
    DeleteObjectfollowingSFX(4001549, false);
    DeleteObjectfollowingSFX(4001550, false);
    DeleteObjectfollowingSFX(4001551, false);
    DeleteObjectfollowingSFX(4001552, false);
    DeleteObjectfollowingSFX(4001553, false);
    DeleteObjectfollowingSFX(4001554, false);
    DeleteObjectfollowingSFX(4001555, false);
    DeleteObjectfollowingSFX(4001556, false);
    DeleteObjectfollowingSFX(4001557, false);
    DeleteObjectfollowingSFX(4001558, false);
    DeleteObjectfollowingSFX(4001559, false);
    DeleteObjectfollowingSFX(4001560, false);
    DeleteObjectfollowingSFX(4001561, false);
    DeleteObjectfollowingSFX(4001562, false);
    DeleteObjectfollowingSFX(4001563, false);
    DeleteObjectfollowingSFX(4001564, false);
    DeleteObjectfollowingSFX(4001565, false);
    DeleteObjectfollowingSFX(4001566, false);
    DeleteObjectfollowingSFX(4001567, false);
    DeleteObjectfollowingSFX(4001568, false);
    DeleteObjectfollowingSFX(4001569, false);
    DeleteObjectfollowingSFX(4001570, false);
    DeleteObjectfollowingSFX(4001571, false);
    DeleteObjectfollowingSFX(4001572, false);
    CreateObjectfollowingSFX(4001500, 200, 800022);
    CreateObjectfollowingSFX(4001501, 200, 800022);
    CreateObjectfollowingSFX(4001502, 200, 800022);
    CreateObjectfollowingSFX(4001503, 200, 800022);
    CreateObjectfollowingSFX(4001510, 200, 839010);
    CreateObjectfollowingSFX(4001511, 200, 839010);
    CreateObjectfollowingSFX(4001512, 200, 839010);
    CreateObjectfollowingSFX(4001513, 200, 839010);
    CreateObjectfollowingSFX(4001514, 200, 839010);
    CreateObjectfollowingSFX(4001515, 200, 839010);
    CreateObjectfollowingSFX(4001516, 200, 839010);
    CreateObjectfollowingSFX(4001517, 200, 839010);
    CreateObjectfollowingSFX(4001518, 200, 839010);
    CreateObjectfollowingSFX(4001519, 200, 839010);
    CreateObjectfollowingSFX(4001520, 200, 839010);
    CreateObjectfollowingSFX(4001521, 200, 839010);
    CreateObjectfollowingSFX(4001522, 200, 839010);
    CreateObjectfollowingSFX(4001523, 200, 839010);
    CreateObjectfollowingSFX(4001524, 200, 839010);
    CreateObjectfollowingSFX(4001525, 200, 839010);
    CreateObjectfollowingSFX(4001526, 200, 839010);
    CreateObjectfollowingSFX(4001527, 200, 839010);
    CreateObjectfollowingSFX(4001528, 200, 839010);
    CreateObjectfollowingSFX(4001529, 200, 839010);
    CreateObjectfollowingSFX(4001530, 200, 839010);
    CreateObjectfollowingSFX(4001531, 200, 839010);
    CreateObjectfollowingSFX(4001532, 200, 839010);
    CreateObjectfollowingSFX(4001533, 200, 839010);
    CreateObjectfollowingSFX(4001534, 200, 839010);
    CreateObjectfollowingSFX(4001535, 200, 839010);
    CreateObjectfollowingSFX(4001536, 200, 839010);
    CreateObjectfollowingSFX(4001537, 200, 839010);
    CreateObjectfollowingSFX(4001538, 200, 839010);
    CreateObjectfollowingSFX(4001539, 200, 839010);
    CreateObjectfollowingSFX(4001540, 200, 839010);
    CreateObjectfollowingSFX(4001541, 200, 839010);
    CreateObjectfollowingSFX(4001542, 200, 839010);
    CreateObjectfollowingSFX(4001543, 200, 839010);
    CreateObjectfollowingSFX(4001544, 200, 839010);
    CreateObjectfollowingSFX(4001545, 200, 839010);
    CreateObjectfollowingSFX(4001546, 200, 839010);
    CreateObjectfollowingSFX(4001547, 200, 839010);
    CreateObjectfollowingSFX(4001548, 200, 839010);
    CreateObjectfollowingSFX(4001549, 200, 839010);
    CreateObjectfollowingSFX(4001550, 200, 839010);
    CreateObjectfollowingSFX(4001551, 200, 839010);
    CreateObjectfollowingSFX(4001552, 200, 839010);
    CreateObjectfollowingSFX(4001553, 200, 839010);
    CreateObjectfollowingSFX(4001554, 200, 839010);
    CreateObjectfollowingSFX(4001555, 200, 839010);
    CreateObjectfollowingSFX(4001556, 200, 839010);
    CreateObjectfollowingSFX(4001557, 200, 839010);
    CreateObjectfollowingSFX(4001558, 200, 839010);
    CreateObjectfollowingSFX(4001559, 200, 839010);
    CreateObjectfollowingSFX(4001560, 200, 839010);
    CreateObjectfollowingSFX(4001561, 200, 839010);
    CreateObjectfollowingSFX(4001562, 200, 839010);
    CreateObjectfollowingSFX(4001563, 200, 839010);
    CreateObjectfollowingSFX(4001564, 200, 839010);
    CreateObjectfollowingSFX(4001565, 200, 839010);
    CreateObjectfollowingSFX(4001566, 200, 839010);
    CreateObjectfollowingSFX(4001567, 200, 839010);
    CreateObjectfollowingSFX(4001568, 200, 839010);
    CreateObjectfollowingSFX(4001569, 200, 839010);
    CreateObjectfollowingSFX(4001570, 200, 839010);
    CreateObjectfollowingSFX(4001571, 200, 839010);
    CreateObjectfollowingSFX(4001572, 200, 839010);
});

// Toggle Message Visbility
$Event(14005445, Restart, function() {
    EndIf(!EventFlag(131));

    SetVisibilityOfMessage(4004222, Disabled);
});

// Firelink Shrine Music
$Event(14005450, Default, function() {
    SetNetworkSyncState(Disabled);

    EndIf(PlayerIsNotInOwnWorld());

    EnableMapSoundWithFade(4004450, Disabled, 5);
    EnableMapSoundWithFade(4004460, Disabled, 5);

    WaitFixedTimeSeconds(0.5);

    WaitFor(
        (PlayerStandingOnHit(4004100)
            || PlayerStandingOnHit(4004101)
            || PlayerStandingOnHit(4004102)
            || PlayerStandingOnHit(4004103)
            || PlayerStandingOnHit(4004104)
            || PlayerStandingOnHit(4004109))
            && !EventFlag(74000122));

    if (EventFlag(50006020)) {
        EnableMapSoundWithFade(4004450, Enabled, 5);
    } else {
        EnableMapSoundWithFade(4004460, Enabled, 5);
    }

    WaitFixedTimeSeconds(0.5);

    hit = PlayerStandingOnHit(4004100)
        || PlayerStandingOnHit(4004101)
        || PlayerStandingOnHit(4004102)
        || PlayerStandingOnHit(4004103)
        || PlayerStandingOnHit(4004104)
        || PlayerStandingOnHit(4004109);
    flag = EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 50006020);
    WaitFor(!hit || flag);
    RestartIf(!flag.Passed);

    EnableMapSoundWithFade(4004450, Disabled, 5);
    EnableMapSoundWithFade(4004460, Disabled, 5);

    WaitFixedTimeSeconds(3);

    RestartEvent();
});

// Disable Map Sound States
$Event(1405451, Restart, function() {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(4004450, Disabled);
    SetMapSoundState(4004460, Disabled);
});

// Giant Tree Seed Drop
$Event(14005460, Default, function() {
    if (!ThisEventSlot()) {
        if (EventFlag(9400)) {

            WaitFor(ActionButtonInArea(9350, 4001460));
            RotateCharacter(10000, 4001460, 60070, true);
            AwardItemLot(4000);
            SetEventFlag(9400, OFF);

            WaitFixedTimeSeconds(3);

            RestartEvent();
        }
    }

    // 
L0:
    WaitFor(ActionButtonInArea(9350, 4001460));
    DisplayGenericDialog(10012010, PromptType.OKCANCEL, NumberofOptions.OneButton, 4001460, 3);

    WaitFixedTimeSeconds(3);

    RestartEvent();
});

// Way of White Circlet Apperance
$Event(14005461, Restart, function() {
    SetNetworkSyncState(Disabled);

    EndIf(PlayerIsNotInOwnWorld());

    DeleteObjectfollowingSFX(4001461, true);

    EndIf(PlayerHasItem(ItemType.Goods, 119) || MultiplayerNetworkPenalized());

    CreateObjectfollowingSFX(4001461, 90, 62);

    WaitFor(ActionButtonInArea(4000, 4001461));
    RotateCharacter(10000, 4001461, 60070, true);
    AwardItemLot(4020);
    DeleteObjectfollowingSFX(4001461, true);
});

// Area Welcome Message - Untended Graves
$Event(14005470, Default, function() {
    SetNetworkSyncState(Disabled);

    WaitFor(!(PlayerStandingOnHit(4004120) || PlayerStandingOnHit(4004140)) && PlayerInMap(40, 0));

    if (!PlayerIsNotInOwnWorld()) {

        EndIf(!EventFlag(743));
    }

    // 
L0:
    SetAreaWelcomeMessageState(Disabled);
    DisplayAreaWelcomeMessage(4010);
    SetEventFlag(743, OFF);
});

// Area Welcome Message - Disable
$Event(14005471, Restart, function() {
    SetNetworkSyncState(Disabled);

    WaitFor(
        !EventFlag(74000013)
            && PlayerInMap(40, 0)
            && !PlayerStandingOnHit(4004120)
            && !CharacterDead(10000));

    SetAreaWelcomeMessageState(Disabled);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

// Area Welcome Message - Enable
$Event(14005472, Restart, function() {
    SetNetworkSyncState(Disabled);

    WaitFor(PlayerInMap(40, 0) && CharacterDead(10000));

    WaitFixedTimeFrames(1);
    SetAreaWelcomeMessageState(Enabled);
    SetEventFlag(743, ON);
});

// Area Welcome Message - Enable
$Event(14005473, Restart, function() {
    SetNetworkSyncState(Disabled);

    WaitFor(PlayerInMap(40, 0) && CharacterHasSpEffect(10000, 3220));

    SetAreaWelcomeMessageState(Enabled);
    SetEventFlag(743, ON);
});

// Area Welcome Message - Enable
$Event(14005474, Restart, function() {
    SetNetworkSyncState(Disabled);

    WaitFor(PlayerInMap(40, 0) && EventFlag(74000013));

    SetAreaWelcomeMessageState(Enabled);
    SetEventFlag(743, ON);
});

// Area Welcome Message - The Abyss
$Event(14005475, Default, function() {
    SetNetworkSyncState(Disabled);

    WaitFor(PlayerStandingOnHit(4004140));

    SetAreaWelcomeMessageState(Disabled);
    DisplayAreaWelcomeMessage(3017);
});


// Advance Journey (NG+)
$Event(14005480, Default, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());

    SetEventFlag(X0_4, OFF);

    WaitFor(EventFlag(X0_4));

    SetEventFlag(X0_4, OFF);
    DisableLoadingScreenTips(true);
    SetEventFlag(30, ON);

    // Items
    RemoveItemFromPlayer(ItemType.Goods, 2123, 1); // Cinders of a Lord
    RemoveItemFromPlayer(ItemType.Goods, 2124, 1); // Cinders of a Lord
    RemoveItemFromPlayer(ItemType.Goods, 2125, 1); // Cinders of a Lord
    RemoveItemFromPlayer(ItemType.Goods, 2126, 1); // Cinders of a Lord
    RemoveItemFromPlayer(ItemType.Goods, 115, 1); // Black Eye Orb
    RemoveItemFromPlayer(ItemType.Goods, 390, 1); // Fire Keeper Soul
    RemoveItemFromPlayer(ItemType.Goods, 490, 8); // Dark Sigil
    RemoveItemFromPlayer(ItemType.Goods, 2117, 1); // Basin of Vows
    RemoveItemFromPlayer(ItemType.Goods, 2135, 1); // Transposing Kiln
    RemoveItemFromPlayer(ItemType.Goods, 2137, 1); // Coiled Sword
    RemoveItemFromPlayer(ItemType.Goods, 2138, 1); // Eyes of a Fire Keeper
    RemoveItemFromPlayer(ItemType.Goods, 2139, 1); // Sword of Avowal
    RemoveItemFromPlayer(ItemType.Goods, 2142, 1); // Hawkwood's Swordgrass
    RemoveItemFromPlayer(ItemType.Goods, 2155, 1); // Contraption Key
    RemoveItemFromPlayer(ItemType.Goods, 2156, 1); // Small Envoy Banner
    RemoveItemFromPlayer(ItemType.Goods, 2158, 1); // Blood of the Dark Soul

    // Keys
    RemoveItemFromPlayer(ItemType.Goods, 2001, 1); // Lift Chamber Key
    RemoveItemFromPlayer(ItemType.Goods, 2005, 1); // Small Doll
    RemoveItemFromPlayer(ItemType.Goods, 2007, 1); // Jailbreaker's Key
    RemoveItemFromPlayer(ItemType.Goods, 2008, 1); // Jailer's Key Ring
    RemoveItemFromPlayer(ItemType.Goods, 2009, 1); // Grave Key
    RemoveItemFromPlayer(ItemType.Goods, 2010, 1); // Cell Key
    RemoveItemFromPlayer(ItemType.Goods, 2011, 1); // Dungeon Ground Floor Key
    RemoveItemFromPlayer(ItemType.Goods, 2012, 1); // Old Cell Key
    RemoveItemFromPlayer(ItemType.Goods, 2013, 1); // Forgotten Key
    RemoveItemFromPlayer(ItemType.Goods, 2014, 1); // Grand Archives Key
    RemoveItemFromPlayer(ItemType.Goods, 2015, 1); // Tower Key
    RemoveItemFromPlayer(ItemType.Goods, 2102, 1); // Small Lothric Banner
    RemoveItemFromPlayer(ItemType.Goods, 2065, 1); // Seal of Judgment

    // Turn-ins
    RemoveItemFromPlayer(ItemType.Goods, 2103, 1); // Farron Coal
    RemoveItemFromPlayer(ItemType.Goods, 2104, 1); // Sage's Coal
    RemoveItemFromPlayer(ItemType.Goods, 2105, 1); // Giant's Coal
    RemoveItemFromPlayer(ItemType.Goods, 2106, 1); // Profaned Coal
    RemoveItemFromPlayer(ItemType.Goods, 2177, 1); // Angelic Braille Divine Tome
    RemoveItemFromPlayer(ItemType.Goods, 2178, 1); // Heavenly Braille Divine Tome
    RemoveItemFromPlayer(ItemType.Goods, 2119, 1); // Braille Divine Tome of Carim
    RemoveItemFromPlayer(ItemType.Goods, 2120, 1); // Braille Divine Tome of Lothric
    RemoveItemFromPlayer(ItemType.Goods, 2121, 1); // Braille Divine Tome of Sunlight
    RemoveItemFromPlayer(ItemType.Goods, 2144, 1); // Deep Braille Divine Tome
    RemoveItemFromPlayer(ItemType.Goods, 2145, 1); // Londor Braille Divine Tome
    RemoveItemFromPlayer(ItemType.Goods, 2175, 1); // Writhing Tome
    RemoveItemFromPlayer(ItemType.Goods, 2176, 1); // Abyssal Tome
    RemoveItemFromPlayer(ItemType.Goods, 2127, 1); // Great Swamp Pyromancy Tome
    RemoveItemFromPlayer(ItemType.Goods, 2128, 1); // Carthus Pyromancy Tome
    RemoveItemFromPlayer(ItemType.Goods, 2129, 1); // Izalith Pyromancy Tome
    RemoveItemFromPlayer(ItemType.Goods, 2130, 1); // Quelana Pyromancy Tome
    RemoveItemFromPlayer(ItemType.Goods, 2131, 1); // Grave Warden Pyromancy Tome
    RemoveItemFromPlayer(ItemType.Goods, 2173, 1); // Profaned Pyromancy Tome
    RemoveItemFromPlayer(ItemType.Goods, 2132, 1); // Sage's Scroll
    RemoveItemFromPlayer(ItemType.Goods, 2133, 1); // Logan's Scroll
    RemoveItemFromPlayer(ItemType.Goods, 2134, 1); // Crystal Scroll
    RemoveItemFromPlayer(ItemType.Goods, 2140, 1); // Golden Scroll
    RemoveItemFromPlayer(ItemType.Goods, 2002, 1); // Lordvessel
    RemoveItemFromPlayer(ItemType.Goods, 2004, 1); // Tortured Soul
    RemoveItemFromPlayer(ItemType.Goods, 2006, 1); // Smithbox
});

// Disable Loading Tips in Cemetery of Ash
$Event(14005481, Restart, function() {
    EndIf(PlayerIsNotInOwnWorld());

    WaitFor(PlayerInMap(40, 0));
    DisableLoadingScreenTips(false);
});

// Throne Back messages
$Event(14005484, Restart, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);

    WaitFor(ActionButtonInArea(9356, X4_4));
    DisplayGenericDialog(X0_4, PromptType.OKCANCEL, NumberofOptions.OneButton, X4_4, 3);
    WaitFixedTimeSeconds(3);

    RestartEvent();
});

// Crows - 
$Event(14000490, Default, function() {
    InitializeCrowTradeArea(4002796);
    InitializeCrowTradeArea(4002797);

    SetEventFlag(2040, OFF);
    SetEventFlag(2041, OFF);
    SetEventFlag(2042, OFF);
    SetEventFlag(74000990, OFF);
});

// Crows -  
$Event(14000491, Default, function() {
    EndIf(PlayerIsNotInOwnWorld());

    SetEventFlag(74000995, OFF);

    WaitFor(InArea(10000, 4002795));
    SetEventFlag(74000995, ON);
    WaitFixedTimeSeconds(1);

    WaitFor(!InArea(10000, 4002795));
    SetEventFlag(74000995, OFF);
    WaitFixedTimeSeconds(1);

    RestartEvent();
});

// Champion Gundyr Kill
$Event(14005830, Default, function() {
    EndIf(EventFlag(14000830));

    WaitFor(HPRatio(4000830) <= 0);
    WaitFixedTimeSeconds(1);

    PlaySE(4000830, SoundType.s_SFX, 777777777);

    WaitFor(CharacterDead(4000830));

    HandleBossDefeat(4000830);
    SetEventFlag(14000830, ON);
    SetEventFlag(9320, ON);
    SetEventFlag(6320, ON);
    ChangeCamera(-1, -1);

    // Boss Kill
    InitializeCommonEvent(20020000, 25001017, 25002017, 260150003, 120160); 
});

// Champion Gundyr - Setup Boss
$Event(14005840, Restart, function() {
    SetEventFlag(14000832, OFF); // Phantom Progress Flag

    if (EventFlag(14000830)) {

        ForceCharacterDeath(4000830, false);
        SetCharacterAnimationState(4000830, Disabled);
        ChangeCharacterEnableState(4000830, Disabled);
        EndEvent();
    }

    //
L0:
    SetCharacterInvincibility(4000830, Enabled);
    SetCharacterAIState(4000830, Disabled);
    SetLockOnPoint(4000830, 221, Disabled);
    ChangeCharacterHitmask(4000830, 0, ON);
    ForceAnimationPlayback(4000830, 30002, true, false, false, 0, 1);

    if (!EventFlag(14000831)) {

        areaFlag &= InArea(10000, 4002831);
        WaitFor(areaFlag);
    } else {

        //
L1:
        areaFlag &= EventFlag(14005835) && InArea(10000, 4002800);
        WaitFor(areaFlag);
    }

    //
L2:
    ForceAnimationPlayback(4000830, 20002, false, false, false, 0, 1);
    SetCharacterAIState(4000830, Enabled);
    SetCharacterImmortality(4000830, Disabled);
    SetCharacterInvincibility(4000830, Disabled);
    SetNetworkUpdateRate(4000830, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 4000830, 0, 905115);
    SetEventFlag(14000831, ON);
    SetEventFlag(14000832, ON); // Phantom Progress Flag
    
    // Skip if not in Gauntlet mode
    if (CharacterHasSpEffect(10000, 200104000, ComparisonType.Equal, 1)) 
    {
        WaitFor(HPRatio(10000) <= 0);
        SetMapCeremony(40, 0, 0);
    }
});

// Champion Gundur - Phase Change
$Event(14005841, Default, function() {
    EndIf(EventFlag(14000830));

    WaitFor(HPRatio(4000830) <= 0.5);
    SetEventFlag(14005832, ON);
});

// Champion Gundyr door
$Event(14000842, Restart, function() {
    WaitFixedTimeFrames(1);

    SetObjactState(4001260, -1, Disabled);
    SetObjactState(4001261, -1, Disabled);

    EndIf(EventFlag(64000261));

    WaitFor(EventFlag(14000830));
    SetObjactState(4001261, 400005, Enabled);
});

// Champion Gundyr - Fog Wall Handler
$Event(14000859, Restart, function() {
    // Fogwall - Cemetery Side
    InitializeCommonEvent(20005800, 14000830, 4001800, 4002800, 14005835, 4001830, 4000830, 14000831, 4002831);
    InitializeCommonEvent(20005801, 14000830, 4001800, 4002800, 14005835, 4001830, 14005836);
    InitializeCommonEvent(20005820, 14000830, 4001800, 3, 14000831);
    InitializeCommonEvent(20005810, 14000830, 4001800, 4002800, 10000);

    // Fogwall - Firelink Side
    InitializeCommonEvent(20005800, 14000830, 4001810, 4002810, 14005835, 4001830, 4000830, 14000831, 4002831);
    InitializeCommonEvent(20005801, 14000830, 4001810, 4002810, 14005835, 4001830, 14005836);
    InitializeCommonEvent(20005820, 14000830, 4001810, 3, 14000831);
    InitializeCommonEvent(20005810, 14000830, 4001810, 4002810, 10000);

    if (EventFlag(14000831)) {
        InitializeCommonEvent(20005831, 14000830, 14005835, 14005836, 4002800, 4004830, 4004831, 14005832);
        InitializeCommonEvent(20005831, 14000830, 14005835, 14005836, 4002810, 4004830, 4004831, 14005832);
        EndEvent();
    }

    InitializeCommonEvent(20001836, 14000830, 14005835, 14005836, 14000831, 4004830, 4004831, 14005832);
});

// Orbeck - Spawn State
$Event(14005500, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (!PlayerIsNotInOwnWorld()) {

        if (!AnyBatchEventFlags(1235, 1239)) {
            BatchSetNetworkconnectedEventFlags(1235, 1239, OFF);
            SetNetworkconnectedEventFlag(1235, ON);
        }


        if (EventFlag(1236) && EventFlag(70000063)) {
            BatchSetNetworkconnectedEventFlags(1235, 1239, OFF);
            SetNetworkconnectedEventFlag(1235, ON);
        }

        if (!AnyBatchEventFlags(1220, 1234)) {
            BatchSetNetworkconnectedEventFlags(1220, 1234, OFF);
            SetNetworkconnectedEventFlag(1220, ON);
        }

        if (EventFlag(1235)) {
        }

        //IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 1221);
        //IfEventFlag(AND_02, ON, TargetEventFlagType.EventFlag, 74000553); // Bosses killed without giving scroll

        //SkipIfConditionGroupStateUncompiled(2, FAIL, AND_02);
        //BatchSetNetworkconnectedEventFlags(1220, 1234, OFF);
        //SetNetworkconnectedEventFlag(1222, ON);

        //IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 1221);
        //IfEventFlag(AND_03, ON, TargetEventFlagType.EventFlag, 74000583); // Purchased all spells

        //SkipIfConditionGroupStateUncompiled(2, FAIL, AND_03);
        //BatchSetNetworkconnectedEventFlags(1220, 1234, OFF);
        //SetNetworkconnectedEventFlag(1223, ON);

        // Sin State
L9:
        SetEventFlag(70000063, OFF);
        SetEventFlag(74000551, OFF);
        if (EventFlag(1235)) {
            SetEventFlag(74000570, OFF);
        }
    }

    // 
L10:
    GotoIf(L0, EventFlag(1221));
    GotoIf(L3, AnyBatchEventFlags(1222, 1234));
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    DeactivateObject(X8_4, Disabled);
    EndEvent();

    // 
L0:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    GotoIf(L1, EventFlag(1236));
    GotoIf(L2, EventFlag(1238));
    ForceAnimationPlayback(X0_4, X4_4, true, false, true, 0, 1);
    EndEvent();

    // 
L1:
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndEvent();

    // 
L2:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndEvent();

    // 
L3:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
});

// Yuria - Spawn State
$Event(14005520, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (!PlayerIsNotInOwnWorld()) {

        if (!AnyBatchEventFlags(1055, 1059)) {
            BatchSetNetworkconnectedEventFlags(1055, 1059, OFF);
            SetNetworkconnectedEventFlag(1055, ON);
        }


        if (EventFlag(1056) && EventFlag(70000054)) { // Sinned // "Hostile"
            BatchSetNetworkconnectedEventFlags(1055, 1059, OFF);
            SetNetworkconnectedEventFlag(1055, ON);
        }

        if (!AnyBatchEventFlags(1040, 1054)) {
            BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
            SetNetworkconnectedEventFlag(1040, ON);
        }

        if (EventFlag(1055)) {


            // 
            if (EventFlag(700) && EventFlag(1040) && YoelLevelCount() <= 0 && !EventFlag(74000124)) { // Healed Dark Sigils // Initial flag setup // "Dead"
                BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
                SetNetworkconnectedEventFlag(1041, ON);
            }


            //
            if (EventFlag(1041) && EventFlag(50006193)) {
                BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
                SetNetworkconnectedEventFlag(1042, ON);
            }


            //
            if (EventFlag(1042) && EventFlag(74000640)) { // Summoned as Phantom
                BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
                SetNetworkconnectedEventFlag(1045, ON);
            }


            // Yoel Killed, Dark Sigils Healed -> Leave
            if (AnyBatchEventFlags(1040, 1042)
                && ((YoelLevelCount() > 0 && EventFlag(1078)) || EventFlag(74000124))) { // Healed Dark Sigils // Yoel "Killed"
                BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
                SetNetworkconnectedEventFlag(1044, ON); // Quest Stage: Leave Shrine
            }


            // Anri Killed -> Leave
            if (EventFlag(1041) && AnyBatchEventFlags(1340, 1347) && EventFlag(1358)) {
                BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
                SetNetworkconnectedEventFlag(1044, ON); // Quest Stage: Leave Shrine
            }


            //
            if (AnyBatchEventFlags(1041, 1042) && EventFlag(1561) && EventFlag(1578)) {
                BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
                SetNetworkconnectedEventFlag(1043, ON);
            }


            // 
            if (EventFlag(1043) && (EventFlag(74000619) || !EventFlag(74000600))) {
                BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
                SetNetworkconnectedEventFlag(1044, ON); // Quest Stage: Leave Shrine
            }
        }

        // 
L9:
        SetEventFlag(70000054, OFF);
        if (EventFlag(1055)) {
            SetEventFlag(74000620, OFF);
        }
    }

    // 
L10:
    if (!EventFlag(1041)) {
        if (!EventFlag(1042)) {
            if (!EventFlag(1043)) {
                if (!EventFlag(1044)) {
                    //GotoIfEventFlag(Label.LABEL2, ON, TargetEventFlagType.EventFlag, 1044);
                    ChangeCharacterEnableState(X0_4, Disabled);
                    SetCharacterBackreadState(X0_4, true);
                    DeactivateObject(X12_4, Disabled);
                    EndEvent();
                }
            }
        }
    }

    // 
L1:
    DeactivateObject(X12_4, Disabled);
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    GotoIf(L16, EventFlag(1056));
    GotoIf(L18, EventFlag(1058));
    ForceAnimationPlayback(X0_4, X4_4, true, false, true, 0, 1);
    EndEvent();

    // 
L16:
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndEvent();

    // 
L18:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndEvent();

    // 
L2:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetObjectTreasureState(X12_4, Enabled);
    EndEvent();
});

// Yuria -
$Event(14005521, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(PlayerIsNotInOwnWorld());

    SetEventFlag(X12_4, OFF);

    WaitFor(
        !EventFlag(X4_4)
            && !EventFlag(X8_4)
            && HPRatio(X0_4) > 0
            && ((HasDamageType(X0_4, 10000, DamageType.Unspecified) && HPRatio(X0_4) < X16_4)
                || EventFlag(X12_4))
            && (EventFlag(1041) || EventFlag(1043)));

    SetCharacterTeamType(X0_4, TeamType.HostileNPC);

    if (1 != X28_4) {

        BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
        SetNetworkconnectedEventFlag(X4_4, ON);
    } else {

        // 
L0:
        BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
        SetNetworkconnectedEventFlag(X8_4, ON);
    }

    //
L9:
    SaveRequest(0);
    WaitFixedTimeFrames(1);


    if (CharacterHasSpEffect(X0_4, 159)) {
        ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
    }
});

// Yuria - 
$Event(14000522, Default, function() {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(ThisEvent());

    WaitFor(EventFlag(1055) && AnyBatchEventFlags(1041, 1042) && EventFlag(74000124));

    BatchSetNetworkconnectedEventFlags(1040, 1054, OFF);
    SetNetworkconnectedEventFlag(1043, ON);
    SetNetworkconnectedEventFlag(74000630, OFF);
    SaveRequest(0);
});

// Eygon - Spawn State
$Event(14005540, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (!PlayerIsNotInOwnWorld()) {

        if (!AnyBatchEventFlags(1315, 1319)) {
            BatchSetNetworkconnectedEventFlags(1315, 1319, OFF);
            SetNetworkconnectedEventFlag(1315, ON);
        }


        if (EventFlag(1316) && EventFlag(70000067)) {
            BatchSetNetworkconnectedEventFlags(1315, 1319, OFF);
            SetNetworkconnectedEventFlag(1315, ON);
        }

        if (!AnyBatchEventFlags(1300, 1314)) {
            BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
            SetNetworkconnectedEventFlag(1300, ON);
        }

        if (EventFlag(1315)) {


            if (EventFlag(1300) && EventFlag(73100304)) {
                BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
                SetNetworkconnectedEventFlag(1301, ON);
            }


            if (EventFlag(1301) && EventFlag(9307)) {
                BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
                SetNetworkconnectedEventFlag(1302, ON);
            }


            if (EventFlag(1302) && EventFlag(74000650)) {
                BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
                SetNetworkconnectedEventFlag(1303, ON);
            }


            if (AnyBatchEventFlags(1301, 1303) && EventFlag(1298)) {
                BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
                SetNetworkconnectedEventFlag(1302, ON);
                BatchSetNetworkconnectedEventFlags(1315, 1319, OFF);
                SetNetworkconnectedEventFlag(1317, ON);


            } else if (EventFlag(1303) && EventFlag(9308) && EventFlag(74000380)) {
                BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
                SetNetworkconnectedEventFlag(1305, ON);
                BatchSetNetworkconnectedEventFlags(1315, 1319, OFF);
                SetNetworkconnectedEventFlag(1318, ON);
            }

            // 
L9:
            SetEventFlag(70000067, OFF);
            if (EventFlag(1315)) {
                SetEventFlag(74000670, OFF);
            }
        }
    }

    // 
L10:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X16_4, -1, X4_4);
    GotoIf(L2, EventFlag(1302));
    GotoIf(L4, EventFlag(1304));
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    EndEvent();

    // 
L2:
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    GotoIf(L16, EventFlag(1316));
    GotoIf(L17, EventFlag(1317));
    GotoIf(L18, EventFlag(1318));
    ForceAnimationPlayback(X0_4, X8_4, true, false, true, 0, 1);
    EndEvent();

    // 
L16:
L17:
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndEvent();

    // 
L18:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndEvent();

    // 
L4:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    if (!EventFlag(1318)) {
        SetCharacterAIState(X4_4, Disabled);
        SetCharacterTeamType(X4_4, TeamType.HostileNPC);
        EndEvent();
    }

    // 
L18:
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X4_4);
    EndEvent();
});

// Eygon -
$Event(14005541, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIf(PlayerIsNotInOwnWorld());

    WaitFor(
        EventFlag(X32_4)
            && (EventFlag(X24_4) || EventFlag(X4_4))
            && AnyBatchEventFlags(X12_4, X16_4)
            && EventFlag(X20_4));

    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    BatchSetNetworkconnectedEventFlags(X24_4, X28_4, OFF);
    SetNetworkconnectedEventFlag(X8_4, ON);
    SaveRequest(0);

    WaitFixedTimeFrames(1);

    if (CharacterHasSpEffect(X0_4, 159)) {
        ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
    }
});

// Eygon -
$Event(14005542, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(PlayerIsNotInOwnWorld());


    EndIf(
        !(AnyBatchEventFlags(1301, 1303)
            && EventFlag(1315)
            && AnyBatchEventFlags(1282, 1283)
            && EventFlag(1295)
            && EventFlag(74000351)
            && !PlayerIsNotInOwnWorld()));

    if (!PlayerIsNotInOwnWorld()) {

        BatchSetNetworkconnectedEventFlags(1300, 1314, OFF);
        SetNetworkconnectedEventFlag(1304, ON);
        BatchSetNetworkconnectedEventFlags(1315, 1319, OFF);
        SetNetworkconnectedEventFlag(1317, ON);

        if (EventFlag(1282)) {

            BatchSetNetworkconnectedEventFlags(1280, 1294, OFF);
            SetNetworkconnectedEventFlag(1284, ON);
        } else {

            //
L0:
            BatchSetNetworkconnectedEventFlags(1280, 1294, OFF);
            SetNetworkconnectedEventFlag(1285, ON);
        }

        //
L1:
        NoOp();
    }
L10:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Enabled);
    SetCharacterBackreadState(X4_4, false);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    SetCharacterAIState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    ChangeCharacterEnableState(X12_4, Enabled);
    SetCharacterBackreadState(X12_4, false);
    SetCharacterTeamType(X12_4, TeamType.Disabled);
    ForceAnimationPlayback(X12_4, X16_4, true, false, false, 0, 1);
});

// Eygon - 
$Event(14005543, Default, function(X0_4) {
    WaitFor(
        EventFlag(1304)
            && !EventFlag(1318)
            && (EntityInRadiusOfEntity(X0_4, 10000, 10, 1)
                || HasDamageType(X0_4, 10000, DamageType.Unspecified)));

    SetCharacterAIState(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);

    WaitFixedTimeFrames(1);


    if (CharacterHasSpEffect(X0_4, 159) || CharacterAIState(X0_4, AIStateType.Normal)) {
        RotateCharacter(X0_4, 10000, -1, true);
    }
});

// Hawkwood - Spawn State
$Event(14005560, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetCharacterAnimationState(4000762, Disabled);

    if (!PlayerIsNotInOwnWorld()) {

        if (!AnyBatchEventFlags(1115, 1119)) {
            BatchSetNetworkconnectedEventFlags(1115, 1119, OFF);
            SetNetworkconnectedEventFlag(1115, ON);
        }


        if (EventFlag(1116) && EventFlag(70000057)) {
            BatchSetNetworkconnectedEventFlags(1115, 1119, OFF);
            SetNetworkconnectedEventFlag(1115, ON);
            BatchSetEventFlags(74000848, 74000849, OFF);
        }

        if (!AnyBatchEventFlags(1100, 1114)) {
            BatchSetNetworkconnectedEventFlags(1100, 1114, OFF);
            SetNetworkconnectedEventFlag(1100, ON);
        }

        if (EventFlag(1115)) {


            if (EventFlag(1100) && (EventFlag(9303) || EventFlag(9306))) {
                BatchSetNetworkconnectedEventFlags(1100, 1114, OFF);
                SetNetworkconnectedEventFlag(1101, ON);
            }


            if (EventFlag(1101) && EventFlag(9307)) {
                BatchSetNetworkconnectedEventFlags(1100, 1114, OFF);
                SetNetworkconnectedEventFlag(1102, ON);
            }


            if (EventFlag(1102) && EventFlag(74000808)) {
                BatchSetNetworkconnectedEventFlags(1100, 1114, OFF);
                SetNetworkconnectedEventFlag(1103, ON);
                SetEventFlag(74000825, ON);
            }


            if (EventFlag(1103) && EventFlag(53200800)) { // Prayed in Archdragon Peak
                BatchSetNetworkconnectedEventFlags(1100, 1114, OFF);
                SetNetworkconnectedEventFlag(1104, ON);
                BatchSetNetworkconnectedEventFlags(1115, 1119, OFF);
                SetNetworkconnectedEventFlag(1117, ON);
                SetEventFlag(50006071, ON);
                SetEventFlag(74000201, ON);
            }
        }

        //
L9:
        SetEventFlag(70000057, OFF);
    }

    //
L10:
    if (!EventFlag(1100)) {
        if (!EventFlag(1101)) {
            if (!EventFlag(1102)) {
                ChangeCharacterEnableState(X0_4, Disabled);
                SetCharacterBackreadState(X0_4, true);
                ChangeCharacterEnableState(X4_4, Disabled);
                SetCharacterBackreadState(X4_4, true);
                EndEvent();
            }
        }
    }

    //
L0:
    if (!AnyBatchEventFlags(1116, 1118)) {
        BatchSetEventFlags(74000810, 74000813, OFF);
        GotoIf(L1, !EventFlag(74000801));
        RandomlySetEventFlagInRange(74000810, 74000813, ON);
    }

    if (EventFlag(74000820)) {
        SetEventFlag(74000810, ON);
    }

    if (EventFlag(74000810)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        SetCharacterBackreadState(X0_4, true);
        WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X12_4, -1, X4_4);
        ChangeCharacterEnableState(4000366, Disabled);
        SetCharacterBackreadState(4000366, true);
        if (!AnyBatchEventFlags(1116, 1118)) {
            ForceAnimationPlayback(X4_4, 90960, false, false, true, 0, 1);
        }
    } else {

        //
L1:
        ChangeCharacterEnableState(X4_4, Disabled);
        SetCharacterBackreadState(X4_4, true);
        WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
        if (!AnyBatchEventFlags(1116, 1118)) {
            ForceAnimationPlayback(X0_4, 90680, false, false, true, 0, 1);
        }
    }

    //
L17:
    GotoIf(L19, EventFlag(1116));
    GotoIf(L19, EventFlag(1117));
    GotoIf(L20, EventFlag(1118));
    EndEvent();

    //
L19:
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    EndEvent();

    //
L20:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    WaitFixedTimeFrames(1);

    if (!EventFlag(74000810)) {
        ForceCharacterTreasure(X0_4);
        EndEvent();
    }

    ForceCharacterTreasure(X4_4);
    EndEvent();
});

// Sirris - Spawn State
$Event(14005570, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (!PlayerIsNotInOwnWorld()) {

        if (!AnyBatchEventFlags(1135, 1139)) {
            BatchSetNetworkconnectedEventFlags(1135, 1139, OFF);
            SetNetworkconnectedEventFlag(1135, ON);
        }


        if (EventFlag(1136) && EventFlag(70000058)) {
            BatchSetNetworkconnectedEventFlags(1135, 1139, OFF);
            SetNetworkconnectedEventFlag(1135, ON);
            SetEventFlag(74000799, OFF);
        }

        if (!AnyBatchEventFlags(1120, 1134)) {
            BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
            SetNetworkconnectedEventFlag(1120, ON);
        }

        if (EventFlag(1135)) {


            if (EventFlag(1120) && EventFlag(133)) {
                BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
                SetNetworkconnectedEventFlag(1121, ON);
            }


            if (EventFlag(1121) && EventFlag(74000750)) {
                BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
                SetNetworkconnectedEventFlag(1122, ON);
            }
            //IfEventFlag(AND_05, ON, TargetEventFlagType.EventFlag, 74000253); // Dreamchaser Ashes given flag


            // Stage - Dreamchaser Ashes given to Shrine Handmaid
            if (EventFlag(1122) && EventFlag(25001006)) { // Defeated the Abyss Watchers
                BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
                SetNetworkconnectedEventFlag(1123, ON);
            }


            if (EventFlag(1123) && EventFlag(74000751)) {
                BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
                SetNetworkconnectedEventFlag(1124, ON);
            }


            if (EventFlag(1124) && EventFlag(8200)) {
                BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
                SetNetworkconnectedEventFlag(1125, ON);
            }


            if (EventFlag(1125) && EventFlag(74000752)) {
                BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
                SetNetworkconnectedEventFlag(1126, ON);
            }


            if ((EventFlag(1124) || EventFlag(1126)) && EventFlag(8220)) {
                BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
                SetNetworkconnectedEventFlag(1127, ON);
                SetEventFlag(74000790, ON);
            }


            if (EventFlag(1127) && EventFlag(74000755)) {
                BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
                SetNetworkconnectedEventFlag(1128, ON);
            }


            if (EventFlag(1127) && EventFlag(74000760) && EventFlag(74000756)) {
                BatchSetNetworkconnectedEventFlags(1120, 1139, OFF);
                SetNetworkconnectedEventFlag(1130, ON);
                SetNetworkconnectedEventFlag(1137, ON);
            }


            if (EventFlag(1128) && EventFlag(9309)) {
                BatchSetNetworkconnectedEventFlags(1120, 1139, OFF);
                SetNetworkconnectedEventFlag(1129, ON);
                SetNetworkconnectedEventFlag(1138, ON);
            }


            if ((EventFlag(1120) || EventFlag(1121)) && EventFlag(73500150)) {
                BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
                SetNetworkconnectedEventFlag(1134, ON);
            }


            if (AnyBatchEventFlags(1122, 1128) && EventFlag(73500150)) {
                BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
                SetNetworkconnectedEventFlag(1133, ON);
            }


            if (EventFlag(1133) && EventFlag(74000753)) {
                BatchSetNetworkconnectedEventFlags(1120, 1134, OFF);
                SetNetworkconnectedEventFlag(1134, ON);
            }
        }

        //
L19:
        SetEventFlag(70000058, OFF);
    }

    //
L20:
    GotoIf(L0, EventFlag(1121));
    GotoIf(L1, EventFlag(1123));
    GotoIf(L2, EventFlag(1125));
    GotoIf(L3, EventFlag(1127));
    GotoIf(L4, EventFlag(1129));
    GotoIf(L5, EventFlag(1133));
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    EndEvent();

    //
L0:
L1:
L2:
L3:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    if (!AnyBatchEventFlags(1136, 1138)) {
        ForceAnimationPlayback(X0_4, 90340, false, false, true, 0, 1);
    }
    Goto(L18);

    //
L5:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);

    //
L18:
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);

    if (!EventFlag(1127)) {
        InitializeCommonEvent(20006000, 4000780, 1136, 1137, 74000770, 1060320051, 1135, 1139, 0, $LAYERS(0)); // Hostility
        InitializeCommonEvent(20006001, 4000780, 1136, 1137, 74000770, 3, $LAYERS(0)); // Hostility Cooldown
    }

    GotoIf(L19, EventFlag(1136));
    GotoIf(L19, EventFlag(1137));
    GotoIf(L20, EventFlag(1138));
    EndEvent();

    //
L4:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X12_4, -1, X4_4);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X4_4);
    EzstateInstructionRequest(X4_4, 800, 1);
    EndEvent();

    //
L19:
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndEvent();

    //
L20:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndEvent();
});

// Unused
$Event(14005571, Restart, function() {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(EventFlag(70000116));
    if (EventFlag(1124) && EventFlag(9303) && EventFlag(9314)) {
        SetEventFlag(70000118, ON);
    }
});

// Anri - Spawn State
$Event(14005580, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (!PlayerIsNotInOwnWorld()) {

        if (!AnyBatchEventFlags(1355, 1359)) {
            BatchSetNetworkconnectedEventFlags(1355, 1359, OFF);
            SetNetworkconnectedEventFlag(1355, ON);
        }


        if (EventFlag(1356) && EventFlag(70000069)) {
            BatchSetNetworkconnectedEventFlags(1355, 1359, OFF);
            SetNetworkconnectedEventFlag(1355, ON);
        }

        if (!AnyBatchEventFlags(1340, 1354)) {
            BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
            SetNetworkconnectedEventFlag(1340, ON);
        }

        if (EventFlag(1355)) {


            if (EventFlag(1340) && EventFlag(73300151)) {
                BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
                SetNetworkconnectedEventFlag(1341, ON);
            }


            if (EventFlag(1341) && EventFlag(9311)) {
                BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
                SetNetworkconnectedEventFlag(1342, ON);
            }


            if (EventFlag(1342) && EventFlag(74000700)) {
                BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
                SetNetworkconnectedEventFlag(1344, ON);
            }


            if (EventFlag(1350) && EventFlag(8260)) {
                BatchSetNetworkconnectedEventFlags(1340, 1354, OFF);
                SetNetworkconnectedEventFlag(1351, ON);
                SetEventFlag(74000180, ON);
            }
        }

        // 
L9:
        SetEventFlag(70000069, OFF);
        if (EventFlag(1355)) {
            SetEventFlag(74000720, OFF);
        }
    }

    // 
L10:
    if (!EventFlag(1342)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        SetCharacterBackreadState(X0_4, true);
        ChangeCharacterEnableState(X4_4, Disabled);
        SetCharacterBackreadState(X4_4, true);
        EndEvent();
    }

    // 
L0:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X16_4, -1, X0_4);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X20_4, -1, X4_4);
    GotoIf(L1, EventFlag(1356));
    GotoIf(L2, EventFlag(1357));
    GotoIf(L3, EventFlag(1358));
    if (EventFlag(9013)) {
        ChangeCharacterEnableState(X4_4, Disabled);
        SetCharacterBackreadState(X4_4, true);
        ForceAnimationPlayback(X0_4, X8_4, false, false, false, 0, 1);
        EndEvent();
    }

    // 
L20:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceAnimationPlayback(X4_4, X8_4, false, false, false, 0, 1);
    EndEvent();

    // 
L1:
    if (EventFlag(9013)) {
        ChangeCharacterEnableState(X4_4, Disabled);
        SetCharacterBackreadState(X4_4, true);
        SetCharacterTeamType(X0_4, TeamType.HostileNPC);
        EndEvent();
    }

    // 
L20:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    EndEvent();

    // 
L2:
    if (EventFlag(9013)) {
        ChangeCharacterEnableState(X4_4, Disabled);
        SetCharacterBackreadState(X4_4, true);
        SetCharacterTeamType(X0_4, TeamType.HostileNPC);
        ForceAnimationPlayback(X0_4, X12_4, false, false, false, 0, 1);
        SetCharacterAIState(X0_4, Disabled);
        EndEvent();
    }

    // 
L20:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    ForceAnimationPlayback(X4_4, X12_4, false, false, false, 0, 1);
    SetCharacterAIState(X4_4, Disabled);
    EndEvent();

    // 
L3:
    if (EventFlag(9013)) {
        ChangeCharacterEnableState(X4_4, Disabled);
        SetCharacterBackreadState(X4_4, true);
        ChangeCharacterEnableState(X0_4, Disabled);
        SetCharacterBackreadState(X0_4, true);
        WaitFixedTimeFrames(1);
        ForceCharacterTreasure(X0_4);
        EndEvent();
    }

    // 
L20:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X4_4);
    EndEvent();
});

// Anri - 
$Event(14005581, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(PlayerIsNotInOwnWorld());

    SetEventFlag(X12_4, OFF);
    SetEventFlag(X16_4, OFF);









    WaitFor(
        (!AnyBatchEventFlags(1356, 1357)
            && HPRatio(X0_4) > 0
            && HPRatio(X4_4) > 0
            && EventFlag(1342)
            && ((HasDamageType(X0_4, 10000, DamageType.Unspecified) && HPRatio(X0_4) < X20_4)
                || (HasDamageType(X4_4, 10000, DamageType.Unspecified) && HPRatio(X4_4) < X20_4)
                || EventFlag(X12_4)))
            || (!AnyBatchEventFlags(1496, 1497)
                && HPRatio(X8_4) > 0
                && EventFlag(1482)
                && ((HasDamageType(X8_4, 10000, DamageType.Unspecified) && HPRatio(X8_4) < X20_4)
                    || EventFlag(X16_4))));

    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    SetCharacterTeamType(X8_4, TeamType.HostileNPC);

    BatchSetNetworkconnectedEventFlags(1355, 1359, OFF);
    SetNetworkconnectedEventFlag(1356, ON);
    BatchSetNetworkconnectedEventFlags(1495, 1499, OFF);
    SetNetworkconnectedEventFlag(1496, ON);
    SaveRequest(0);

    WaitFixedTimeFrames(1);

    if (CharacterHasSpEffect(X0_4, 159)) {
        ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
    }

    if (CharacterHasSpEffect(X4_4, 159)) {
        ForceAnimationPlayback(X4_4, 0, false, false, false, 0, 1);
    }

    if (CharacterHasSpEffect(X8_4, 159)) {
        ForceAnimationPlayback(X8_4, 0, false, false, false, 0, 1);
    }
});

// Unused
$Event(14005582, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIf(PlayerIsNotInOwnWorld());

    SetEventFlag(X12_4, OFF);


    WaitFor(
        !EventFlag(X4_4)
            && !EventFlag(X8_4)
            && HPRatio(X0_4) > 0
            && EventFlag(X32_4)
            && ((HasDamageType(X0_4, 10000, DamageType.Unspecified) && HPRatio(X0_4) < X16_4)
                || EventFlag(X12_4)
                || EventFlag(X28_4)));

    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
    SetNetworkconnectedEventFlag(X4_4, ON);
    SaveRequest(0);

    WaitFixedTimeFrames(1);


    if (CharacterHasSpEffect(X0_4, 159)) {
        ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
    }
});

// Anri - 
$Event(14000583, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(ThisEvent());

    WaitFor(
        HPRatio(X0_4) > 0
            && HPRatio(X4_4) > 0
            && EventFlag(X28_4)
            && (EventFlag(X20_4) || EventFlag(X8_4))
            && CharacterDead(X16_4));

    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);

    sp = CharacterHasSpEffect(X0_4, 150);

    if (mainGroupAbuse) {
        ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
    }

    sp2 = CharacterHasSpEffect(X0_4, 150);

    if (mainGroupAbuse) {
        ForceAnimationPlayback(X4_4, 0, false, false, false, 0, 1);
    }

    RequestCharacterAICommand(X0_4, 20, 1);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAICommand(X4_4, 20, 1);
    RequestCharacterAIReplan(X4_4);
    BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
    SetNetworkconnectedEventFlag(X12_4, ON);
    SaveRequest(0);
});

// Anri - 
$Event(14005584, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(PlayerIsNotInOwnWorld());

    EndIf(
        CharacterHasSpEffect(X0_4, 150)
            || CharacterHasSpEffect(X0_4, 151)
            || CharacterHasSpEffect(X4_4, 150)
            || CharacterHasSpEffect(X4_4, 151));

    WaitFor(EventFlag(X8_4) && EventFlag(X12_4));

    EzstateInstructionRequest(X0_4, 1903, 1);
    EzstateInstructionRequest(X4_4, 1903, 1);

    WaitFixedTimeFrames(10);

    RestartEvent();
});

// Horace -
$Event(14000585, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(ThisEvent());

    WaitFor(
        HPRatio(X0_4) > 0
            && EventFlag(X28_4)
            && (EventFlag(X20_4) || EventFlag(X4_4))
            && (CharacterDead(X12_4) || CharacterDead(X16_4)));

    SetCharacterTeamType(X0_4, TeamType.HostileNPC);

    sp = CharacterHasSpEffect(X0_4, 150);

    if (mainGroupAbuse) {
        ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
        RequestCharacterAIReplan(X0_4);
    }

    BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
    SetNetworkconnectedEventFlag(X8_4, ON);
    SaveRequest(0);
});

// Horace - Spawn State
$Event(14005586, Default, function(X0_4, X4_4, X8_4) {
    if (!PlayerIsNotInOwnWorld()) {

        if (!AnyBatchEventFlags(1495, 1499)) {
            BatchSetNetworkconnectedEventFlags(1495, 1499, OFF);
            SetNetworkconnectedEventFlag(1495, ON);
        }


        if (EventFlag(1496) && EventFlag(70000076)) {
            BatchSetNetworkconnectedEventFlags(1495, 1499, OFF);
            SetNetworkconnectedEventFlag(1495, ON);
        }

        if (!AnyBatchEventFlags(1480, 1494)) {
            BatchSetNetworkconnectedEventFlags(1480, 1494, OFF);
            SetNetworkconnectedEventFlag(1480, ON);
        }

        if (EventFlag(1495)) {


            if (EventFlag(1480) && EventFlag(73300151)) {
                BatchSetNetworkconnectedEventFlags(1480, 1494, OFF);
                SetNetworkconnectedEventFlag(1481, ON);
            }


            if (EventFlag(1481) && EventFlag(9311)) {
                BatchSetNetworkconnectedEventFlags(1480, 1494, OFF);
                SetNetworkconnectedEventFlag(1482, ON);
            }


            if (EventFlag(1482) && EventFlag(74000700)) {
                BatchSetNetworkconnectedEventFlags(1480, 1494, OFF);
                SetNetworkconnectedEventFlag(1484, ON);
            }
        }

        // 
L9:
        SetEventFlag(70000076, OFF);
    }

    // 
L10:
    if (!EventFlag(1482)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        SetCharacterBackreadState(X0_4, true);
        EndEvent();
    }

    // 
L0:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    GotoIf(L1, EventFlag(1496));
    GotoIf(L1, EventFlag(1497));
    GotoIf(L3, EventFlag(1498));
    ForceAnimationPlayback(X0_4, X4_4, false, false, false, 0, 1);
    EndEvent();

    // 
L1:
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndEvent();

    // 
L3:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndEvent();
});

// Anri -
$Event(14005587, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(PlayerIsNotInOwnWorld());

    WaitFor(EventFlag(X4_4) && EventFlag(X8_4) && CharacterHasSpEffect(X0_4, 151));
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));

    WaitFixedTimeFrames(1);

    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);

    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    ForceCharacterDeath(X0_4, true);
});

// Fire Keeper - Spawn State
$Event(14005600, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (!PlayerIsNotInOwnWorld()) {

        if (!AnyBatchEventFlags(1015, 1019)) {
            BatchSetNetworkconnectedEventFlags(1015, 1019, OFF);
            SetNetworkconnectedEventFlag(1015, ON);
        }

        if (EventFlag(1018) && !CharacterDead(X0_4)) {
            BatchSetNetworkconnectedEventFlags(1015, 1019, OFF);
            SetNetworkconnectedEventFlag(1015, ON);
            SetEventFlag(74000121, ON);
            SetEventFlag(74000100, ON);
        }

        if (!AnyBatchEventFlags(1000, 1014)) {
            BatchSetNetworkconnectedEventFlags(1000, 1014, OFF);
            SetNetworkconnectedEventFlag(1000, ON);
        }

        if (EventFlag(1001) && EventFlag(145)) {
            BatchSetNetworkconnectedEventFlags(1000, 1014, OFF);
            SetNetworkconnectedEventFlag(1002, ON);
        }

        BatchSetEventFlags(74000135, 74000138, OFF);
        BatchSetEventFlags(74000103, 74000109, OFF);
    }

L9:
    GotoIf(L16, EventFlag(74000147)); // Random Position - Sitting on stairs
    GotoIf(L15, EventFlag(74000148)); // Random Position - By arch
    GotoIf(L17, EventFlag(74000149)); // Random Position - Sitting on stairs (near candles)
    GotoIf(L1, EventFlag(1000) && EventFlag(131));
    GotoIf(L0, EventFlag(1000));
    GotoIf(L2, EventFlag(1001));
    GotoIf(L1, EventFlag(1002));
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();

L0:
    if (!EventFlag(1018)) {
        EndEvent();
    }

L10:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndEvent();

    // Initial position during first encounter in Firelink Shrine
L2:
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X16_4, -1);
    GotoIf(L10, EventFlag(1018));
    EndEvent();

    // Enabled
L1:
    GotoIf(L10, EventFlag(1018));
    RandomlySetEventFlagInRange(74000103, 74000109, ON);
    GotoIf(L16, EventFlag(74000103));
    GotoIf(L16, EventFlag(74000104));
    GotoIf(L17, EventFlag(74000105) && !EventFlag(50006020));

    // Random Position - By arch
L15:
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    EndEvent();

    // Random Position - Sitting on stairs
L16:
    ForceAnimationPlayback(X0_4, 700, true, false, true, 0, 1);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X8_4, -1);
    EndEvent();

    // Random Position - Sitting on stairs (near candles)
L17:
    ForceAnimationPlayback(X0_4, 30001, false, false, false, 0, 1);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X12_4, -1);
    EndEvent();

    // Disabled + Force Treasure
L10:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndEvent();
});

// Fire Keeper -
$Event(14000601, Default, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(ThisEvent());

    SetEventFlag(X0_4, ON);
});

// Fire Keeper - Item Lot
$Event(14005602, Default, function(X0_4, X4_4) {
    EndIf(PlayerIsNotInOwnWorld());

    WaitFor(CharacterDead(X0_4));

    AwardItemLot(X4_4);
    SetEventFlag(74000130, OFF);
    SetEventFlag(74000131, OFF);
});

// Firekeeper - 
$Event(14000603, Default, function(X0_4, X4_4) {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(ThisEvent());

    WaitFor(EventFlag(X0_4));
    SetEventFlag(X4_4, ON);
});

// Firekeeper - 
$Event(14005604, Default, function(X0_4, X4_4) {
    EndIf(PlayerIsNotInOwnWorld());

    WaitFor(EventFlag(1000) && EventFlag(9210));

    SetCharacterHome(X0_4, X4_4);

    WaitFixedTimeFrames(1);

    BatchSetNetworkconnectedEventFlags(1000, 1014, OFF);
    SetNetworkconnectedEventFlag(1001, ON);

    if (CharacterHasSpEffect(X0_4, 151)) {
        ForceAnimationPlayback(X0_4, 20017, false, true, false, 0, 1);
    } else if (CharacterHasSpEffect(X0_4, 153)) {
        ForceAnimationPlayback(X0_4, 20019, false, true, false, 0, 1);
    }

    RequestCharacterAICommand(X0_4, 100, 0);
    RequestCharacterAIReplan(X0_4);

    WaitFor(CharacterHasSpEffect(X0_4, 154));
    WaitFor(!CharacterHasSpEffect(X0_4, 154));
    RequestCharacterAICommand(X0_4, -1, 0);
});

// Firekeeper - 
$Event(14005605, Default, function(X0_4, X4_4, X8_4) {
    EndIf(PlayerIsNotInOwnWorld());

    WaitFor(
        EntityInRadiusOfEntity(10000, X0_4, 5, 1)
            && CharacterHasSpEffect(X0_4, 150)
            && CharacterHasSpEffect(10000, X4_4));

    ForceAnimationPlayback(X0_4, X8_4, false, true, false, 0, 1);

    RestartEvent();
});

// Firekeeper - 
$Event(14005615, Restart, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());

    SetMapSoundState(4003700, Disabled);
    SetMapSoundState(4003701, Disabled);

    WaitFor(CharacterHasSpEffect(X0_4, 155));

    if (PlayerGender(Gender.Male)) {
        SetMapSoundState(4003700, Enabled);
    } else {
        SetMapSoundState(4003701, Enabled);
    }

    WaitFor(!CharacterHasSpEffect(X0_4, 155));

    RestartEvent();
});

// Firekeeper - 
$Event(14005616, Restart, function(X0_4) {
    SetEventFlag(74000139, OFF);

    WaitFor(EventFlag(74000139));

    if (CharacterHasSpEffect(X0_4, 153)) {
        ForceAnimationPlayback(X0_4, 20018, false, false, false, 0, 1);
    }

    RestartEvent();
});

// Unknown
$Event(14005618, Default, function() {
    EndIf(!EventFlag(14005617));
    SetEventFlag(14000618, ON);
});

// Shrine Bonfire
$Event(14005619, Default, function() {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(EventFlag(6500));

    WaitFor(EventFlag(6500));

    if (EventFlag(74000015)) {
        ForceAnimationPlayback(4001950, 10, false, false, false, 0, 1);
        EndEvent();
    }

    if (EventFlag(74000016)) {
        ForceAnimationPlayback(4001950, 20, false, false, false, 0, 1);
        EndEvent();
    }

    if (EventFlag(74000017)) {
        ForceAnimationPlayback(4001950, 30, false, false, false, 0, 1);
        EndEvent();
    }

    if (EventFlag(74000018)) {
        ForceAnimationPlayback(4001950, 40, false, false, false, 0, 1);
        EndEvent();
    }

    if (EventFlag(74000019)) {
        ForceAnimationPlayback(4001950, 50, false, false, false, 0, 1);
        EndEvent();
    }

    if (EventFlag(74000020)) {
        ForceAnimationPlayback(4001950, 60, false, false, false, 0, 1);
        EndEvent();
    }

    if (EventFlag(74000021)) {
        ForceAnimationPlayback(4001950, 70, false, false, false, 0, 1);
        EndEvent();
    }

    if (EventFlag(74000022)) {
        ForceAnimationPlayback(4001950, 80, false, false, false, 0, 1);
        EndEvent();
    }

    if (EventFlag(74000023)) {
        ForceAnimationPlayback(4001950, 90, false, false, false, 0, 1);
        EndEvent();
    }

    if (EventFlag(74000024)) {
        ForceAnimationPlayback(4001950, 100, false, false, false, 0, 1);
        EndEvent();
    }

    ForceAnimationPlayback(4001950, 9900, false, false, false, 0, 1);
    EndEvent();
});

// Patches - Spawn State
$Event(14005620, Default, function(X0_4, X4_4, X8_4) {
    if (!PlayerIsNotInOwnWorld()) {

        SetEventFlag(64001251, ON);
        SetEventFlag(74000919, OFF);

        if (!AnyBatchEventFlags(1375, 1379)) {
            BatchSetNetworkconnectedEventFlags(1375, 1379, OFF);
            SetNetworkconnectedEventFlag(1375, ON);
        }


        if (EventFlag(1376) && EventFlag(70000070)) {
            BatchSetNetworkconnectedEventFlags(1375, 1379, OFF);
            SetNetworkconnectedEventFlag(1375, ON);
        }

        if (!AnyBatchEventFlags(1360, 1374)) {
            BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
            SetNetworkconnectedEventFlag(1360, ON);
        }

        if (EventFlag(1375)) {


            if (EventFlag(1365) && EventFlag(1204) && EventFlag(74000920)) {
                BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
                SetNetworkconnectedEventFlag(1366, ON);
            }


            if (EventFlag(1366) && EventFlag(1206)) {
                BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
                SetNetworkconnectedEventFlag(1365, ON);
            }


            if (EventFlag(1365) && EventFlag(1207) && EventFlag(74000921)) {
                BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
                SetNetworkconnectedEventFlag(1367, ON);
            }


            if (EventFlag(1367) && EventFlag(74000925)) {
                BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
                SetNetworkconnectedEventFlag(1365, ON);
                SetEventFlag(74000914, ON);
                SetEventFlag(70000401, ON);
            }
        }

        //
L19:
        SetEventFlag(70000070, OFF);
        if (EventFlag(1375)) {
            SetEventFlag(74000949, OFF);
        }
    }

    //
L20:
    GotoIf(L0, EventFlag(1364));
    GotoIf(L1, EventFlag(1365));
    GotoIf(L2, EventFlag(1370));
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    EndEvent();

    //
L0:
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterAnimationState(X0_4, Disabled);
    GotoIf(L18, EventFlag(1378));
    GotoIf(L17, AnyBatchEventFlags(1376, 1377));
    EndEvent();

    //
L1:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X8_4, -1, X4_4);
    if (EventFlag(74000916)) {
        if (!AnyBatchEventFlags(1376, 1378)) {
            ForceAnimationPlayback(X4_4, 90810, false, false, true, 0, 1);
            SetEventFlag(74000917, ON);
        }
    }
    GotoIf(L18, EventFlag(1378));
    GotoIf(L17, AnyBatchEventFlags(1376, 1377));
    EndEvent();

    //
L2:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X8_4, -1, X4_4);
    GotoIf(L18, EventFlag(1378));
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    WaitFixedTimeFrames(1);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, 4002714, -1, X4_4);
    SetCharacterHome(X4_4, 4002714);
    EndEvent();

    //
L18:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X4_4);
    EndEvent();

    //
L17:
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterTeamType(X4_4, TeamType.HostileNPC);
    EndEvent();
});

// Patches - 
$Event(14000621, Restart, function(X0_4) {
    if (!EventFlag(1364)) {

        if (NumberOfClientsOfType(ClientType.Invader) != 0) {
            SetEventFlag(64001251, ON);
            SetEventFlag(14000623, ON);
        }

        DeactivateObjactAssignIdx(4001251, 1400340, 0, Disabled);
        DeactivateObjactAssignIdx(4001251, 1400340, 1, Disabled);
        DeactivateObjactAssignIdx(4001251, 1400340, 2, Disabled);
        DeactivateObjactAssignIdx(4001251, 1400340, 3, Disabled);
        ReproduceObjectAnimation(4001251, 0);
    } else {

        //
L1:
        ReproduceObjectAnimation(4001251, 1);
        DeactivateObjactAssignIdx(4001251, 1400340, 0, Disabled);
        DeactivateObjactAssignIdx(4001251, 1400340, 1, Enabled);
        DeactivateObjactAssignIdx(4001251, 1400340, 2, Disabled);
        DeactivateObjactAssignIdx(4001251, 1400340, 3, Disabled);
    }

    //
L2:
    EndIf(ThisEvent());

    WaitFor(
        !PlayerIsNotInOwnWorld()
            && InArea(10000, 4002710)
            && AnyBatchEventFlags(1360, 1363)
            && EventFlag(1375)
            && (EventFlag(1363)
                || EventFlag(73500262)
                || EventFlag(73500263)
                || (EventFlag(138) && EventFlag(9311))));

    if (!PlayerIsNotInOwnWorld()) {
        BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
        SetNetworkconnectedEventFlag(1364, ON);
        SetEventFlag(64001251, OFF);
        SetEventFlag(14000623, OFF);
        PlaySE(4001251, SoundType.a_EnvironmentalSound, 400100000);
    }

    //
L0:
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterAnimationState(X0_4, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 1, Enabled);
    ForceAnimationPlayback(4001251, 1, false, false, false, 0, 1);
    InitializeCommonEvent(20005610, 14000623, 4002713, 4002712);
    InitializeCommonEvent(20005611, 14000623, 4003251, 4001251, 1400340);
});

// Patches - 
$Event(14000622, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEvent());

    WaitFor(
        !PlayerIsNotInOwnWorld() && !InArea(10000, 4002711) && EventFlag(1364) && EventFlag(1375));

    if (!PlayerIsNotInOwnWorld()) {

        BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
        SetNetworkconnectedEventFlag(1365, ON);
        SetEventFlag(70000400, ON);
    }

    //
L0:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Enabled);
    SetCharacterBackreadState(X4_4, false);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X8_4, -1, X4_4);
    DeactivateObjactAssignIdx(4001251, 1400340, 0, Enabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 1, Disabled);

    InitializeCommonEvent(20005610, 14000623, 4002713, 4002712); // Setup Door Area
    InitializeCommonEvent(20005611, 14000623, 4003251, 4001251, 1400340); // Setup Door
});

// Patches - 
$Event(14000624, Restart, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(EventFlag(14000624));

    WaitFor(CharacterDead(4000720));

    EndIf(!EventFlag(1365));
    EndIf(EventFlag(1378));

    BatchSetNetworkconnectedEventFlags(1360, 1374, OFF);
    SetNetworkconnectedEventFlag(1370, ON);
    BatchSetNetworkconnectedEventFlags(1375, 1379, OFF);
    SetNetworkconnectedEventFlag(1377, ON);

    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    SetCharacterHome(X0_4, 4002714);

    if (CharacterHasSpEffect(X0_4, 159)) {
        ForceAnimationPlayback(X0_4, 0, false, false, false, 0, 1);
    }
});

// Unused
$Event(14005625, Restart, function(X0_4) {
    WaitFor(InArea(10000, X0_4));
    SetSpEffect(10000, 4150);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

// Ludleth - Spawn State
$Event(14005640, Default, function(X0_4, X4_4, X8_4) {
    if (!PlayerIsNotInOwnWorld()) {
        SetEventFlag(74000190, OFF);

        if (!AnyBatchEventFlags(1020, 1034)) {
            BatchSetNetworkconnectedEventFlags(1020, 1034, OFF);
            SetNetworkconnectedEventFlag(1020, ON);
        }

        if (EventFlag(1020) && EventFlag(14000110)) {
            BatchSetNetworkconnectedEventFlags(1020, 1034, OFF);
            SetNetworkconnectedEventFlag(1021, ON);
        }

        if (!AnyBatchEventFlags(1035, 1039)) {
            BatchSetNetworkconnectedEventFlags(1035, 1039, OFF);
            SetNetworkconnectedEventFlag(1035, ON);
        }

        if (EventFlag(1038) && EventFlag(1020) && !CharacterDead(X0_4)) {
            BatchSetNetworkconnectedEventFlags(1035, 1039, OFF);
            SetNetworkconnectedEventFlag(1035, ON);
            SetEventFlag(74000190, ON);
            SetEventFlag(74000150, ON);
        }


        if (EventFlag(1021) && EventFlag(14000110)) {
            BatchSetNetworkconnectedEventFlags(1035, 1039, OFF);
            SetNetworkconnectedEventFlag(1038, ON);
        }

        SetEventFlag(74000160, OFF);
        SetEventFlag(74000170, OFF);
        SetEventFlag(74000053, OFF);
    }

    // Enabled (Person)
L9:
    DeactivateObject(X4_4, Disabled);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    GotoIf(L0, EventFlag(1020));
    GotoIf(L1, EventFlag(1021));
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();

    // Enabled (Person) + Disable Object Talk
L0:
    ChangeCharacterEnableState(X8_4, Disabled);
    if (!EventFlag(1038)) {
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, 4004705, -1);
        if (!EventFlag(74000190)) {
            SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
            ForceAnimationPlayback(X0_4, 20, true, false, true, 0, 1);
            EndEvent();
        }

        // Enabled
L15:
        SetEventFlag(74000170, ON);
        SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
        ForceAnimationPlayback(X0_4, 700, true, false, true, 0, 1);
        EndEvent();
    }

    // Force Treasure
L10:
    ForceCharacterTreasure(X0_4);
    EndEvent();

    // Disabled + Force Treasure
L1:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    DeactivateObject(X4_4, Enabled);
    EndEvent();
});

// Andre - Spawn State
$Event(14005660, Default, function(X0_4) {
    if (!PlayerIsNotInOwnWorld()) {

        if (!AnyBatchEventFlags(1175, 1179)) {
            BatchSetNetworkconnectedEventFlags(1175, 1179, OFF);
            SetNetworkconnectedEventFlag(1175, ON); // Hostility
        }


        if (EventFlag(1176) && EventFlag(70000060)) {
            BatchSetNetworkconnectedEventFlags(1175, 1179, OFF);
            SetNetworkconnectedEventFlag(1175, ON); // Hostility
            SetEventFlag(74000200, ON);
        }


        if (EventFlag(1178) && !CharacterDead(X0_4)) {
            BatchSetNetworkconnectedEventFlags(1175, 1179, OFF);
            SetNetworkconnectedEventFlag(1176, ON); // Hostility
        }

        if (!AnyBatchEventFlags(1160, 1174)) {
            BatchSetNetworkconnectedEventFlags(1160, 1174, OFF);
            SetNetworkconnectedEventFlag(1160, ON); // Died
        }

        SetEventFlag(70000060, OFF);
    }

    // Disabled
L9:
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    if (!EventFlag(1160)) { // Died
        ChangeCharacterEnableState(X0_4, Disabled);
        SetCharacterBackreadState(X0_4, true);
        EndEvent();
    }

    // Passthrough
L0:
    if (!EventFlag(1178)) { // Was killed

        // Enabled
L1:
        SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, 4004710, -1);
        ForceAnimationPlayback(X0_4, 700, true, false, true, 0, 1);
        EndEvent();
    }

    // Disabled + Force Treasure
L2:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndEvent();
});

// Andre - Smithing State Monitor
$Event(14005661, Default, function(X0_4) {
    // Disable if not in region
    WaitFor(
        !(!InArea(10000, 4002709)
            && (PlayerStandingOnHit(4004100)
                || PlayerStandingOnHit(4004101)
                || PlayerStandingOnHit(4004102)
                || PlayerStandingOnHit(4004103)
                || PlayerStandingOnHit(4004104)
                || PlayerStandingOnHit(4004109)))
            && HPRatio(X0_4) != 0
            && EventFlag(1160));

    ChangeCharacterEnableState(X0_4, Disabled);

    WaitFixedTimeSeconds(1);
    ClearCompiledConditionGroupState(0);

    // Enable if in region
    WaitFor(
        (!InArea(10000, 4002709)
            && (PlayerStandingOnHit(4004100)
                || PlayerStandingOnHit(4004101)
                || PlayerStandingOnHit(4004102)
                || PlayerStandingOnHit(4004103)
                || PlayerStandingOnHit(4004104)
                || PlayerStandingOnHit(4004109)))
            && HPRatio(X0_4) != 0
            && EventFlag(1160));

    ChangeCharacterEnableState(4000710, Enabled);
    ForceAnimationPlayback(4000710, 700, false, false, false, 0, 1);
    WaitFixedTimeSeconds(1);

    RestartEvent();
});

// Shrine Handmaid - Spawn State
$Event(14005680, Default, function(X0_4, X4_4) {
    if (!PlayerIsNotInOwnWorld()) {

        if (!AnyBatchEventFlags(1195, 1199)) {
            BatchSetNetworkconnectedEventFlags(1195, 1199, OFF);
            SetNetworkconnectedEventFlag(1195, ON); // Hostility
        }


        if (EventFlag(1198) && !CharacterDead(X0_4)) {
            BatchSetNetworkconnectedEventFlags(1195, 1199, OFF);
            SetNetworkconnectedEventFlag(1196, ON); // Hostility
            SetEventFlag(74000251, ON);
        }

        if (!AnyBatchEventFlags(1180, 1194)) {
            BatchSetNetworkconnectedEventFlags(1180, 1194, OFF);
            SetNetworkconnectedEventFlag(1180, ON); // Dead
        }

        if (EventFlag(1195)) { // No Hostility
        }

L9:
        SetEventFlag(70000061, OFF);
        if (EventFlag(1195)) { // No Hostility
            SetEventFlag(74000251, OFF);
        }
    }

    // Disabled (is Dead)
L10:
    if (!EventFlag(1180)) { // Is Dead
        ChangeCharacterEnableState(X0_4, Disabled);
        SetCharacterBackreadState(X0_4, true);
        EndEvent();
    }

    // Enabled
L0:
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    GotoIf(L1, EventFlag(1196)); // Hostility
    GotoIf(L2, EventFlag(1198)); // Killed
    EndEvent();

    //
L1:
    if (EventFlag(74000295)) {
        SetSpEffect(X0_4, 12605);
        EndEvent();
    }
    if (EventFlag(74000294)) {
        SetSpEffect(X0_4, 12604);
        EndEvent();
    }
    if (EventFlag(74000293)) {
        SetSpEffect(X0_4, 12603);
        EndEvent();
    }
    if (EventFlag(74000292)) {
        SetSpEffect(X0_4, 12602);
        EndEvent();
    }
    if (EventFlag(74000291)) {
        SetSpEffect(X0_4, 12601);
        EndEvent();
    }
    if (EventFlag(74000290)) {
        SetSpEffect(X0_4, 12600);
        EndEvent();
    }
    EndEvent();

    // Disabled + Force Treasure
L2:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndEvent();
});

// Shrine Handmaid - Ash flags
$Event(14005681, Default, function() {
    EndIf(PlayerIsNotInOwnWorld());

    SetEventFlag(74000280, OFF);

    flag &= AllBatchEventFlags(70000100, 70000106)
        && AllBatchEventFlags(70000108, 70000110)
        && AllBatchEventFlags(70000112, 70000115)
        && (EventFlag(70000107) || EventFlag(70000116))
        && (EventFlag(70000111) || EventFlag(74000603));

    if (EventFlag(6951)) {
        flag &= EventFlag(70000120);
    }

    if (EventFlag(6952)) {
        flag &= EventFlag(70000121);
    }

    WaitFor(flag);
    SetEventFlag(74000280, ON);
});

// Shrine Handmaid - Set Flags if Dead
$Event(14005682, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(PlayerIsNotInOwnWorld());

    WaitFor(!EventFlag(X4_4) && CharacterDead(X0_4));

    BatchSetNetworkconnectedEventFlags(X8_4, X12_4, OFF);
    SetNetworkconnectedEventFlag(X4_4, ON);

    if (!EventFlag(74000290)) {
        SetEventFlag(74000290, ON);

    } else if (!EventFlag(74000291)) {
        SetEventFlag(74000291, ON);

    } else if (!EventFlag(74000292)) {
        SetEventFlag(74000292, ON);

    } else if (!EventFlag(74000293)) {
        SetEventFlag(74000293, ON);

    } else if (!EventFlag(74000294)) {
        SetEventFlag(74000294, ON);

    } else if (!EventFlag(74000295)) {
        SetEventFlag(74000295, ON);
        Goto(L20);
    }

L20:
    SaveRequest(0);
});

// Shrine Handmaid (Untended Graves) - Spawn State
$Event(14005683, Default, function(X0_4, X4_4) {
    if (!PlayerIsNotInOwnWorld()) {

        if (!AnyBatchEventFlags(1615, 1619)) {
            BatchSetNetworkconnectedEventFlags(1615, 1619, OFF);
            SetNetworkconnectedEventFlag(1615, ON); // Hostility
        }

        if (!AnyBatchEventFlags(1600, 1614)) {
            BatchSetNetworkconnectedEventFlags(1600, 1614, OFF);
            SetNetworkconnectedEventFlag(1600, ON); // Is Dead
        }

        if (EventFlag(1615)) { // Hostility
        }

L9:
        NoOp();
    }

    // Disabled (is Dead)
L10:
    if (!EventFlag(1600)) { // Is Dead
        ChangeCharacterEnableState(X0_4, Disabled);
        SetCharacterBackreadState(X0_4, true);
        EndEvent();
    }

    // Enabled
L0:
    if (!EventFlag(1618)) { // Is Killed
        SetCharacterGravity(X0_4, Disabled);
        SetCharacterMaphit(X0_4, true);
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
        EndEvent();
    }

    // Disabled + Force Treasure
L2:
    ForceCharacterTreasure(X0_4);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
});

// Shrine Handmaid (Untended Graves) - Flag Setter
$Event(14005684, Default, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(EventFlag(X0_4));

    WaitFor(AllBatchEventFlags(13300396, 13300397));
    SetEventFlag(X0_4, ON);
});

// Greirat - Spawn State
$Event(14005700, Default, function(X0_4, X4_4) {
    if (!PlayerIsNotInOwnWorld()) {

        // Curse-rotted Greatwood killed
        if (EventFlag(25001003)) {
            SetEventFlag(74000316, ON);
        }

        // Pontiff Sulyvahn killed
        if (EventFlag(25001009)) {
            SetEventFlag(74000318, ON);
        }

        if (!AnyBatchEventFlags(1215, 1219)) {
            BatchSetNetworkconnectedEventFlags(1215, 1219, OFF);
            SetNetworkconnectedEventFlag(1215, ON); // "Passive"
        }

        if (EventFlag(1216) && EventFlag(70000062)) { // Sin State: Greirat // "Hostile"
            BatchSetNetworkconnectedEventFlags(1215, 1219, OFF);
            SetNetworkconnectedEventFlag(1215, ON); // "Passive"
        }

        if (!AnyBatchEventFlags(1200, 1214)) {
            BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
            SetNetworkconnectedEventFlag(1200, ON); // "Dead"
        }

        if (EventFlag(1215)) { // Goto Label 9 if "Hostile" is OFF


            // Quest Stage: Undead Settlement Pillage
            if (EventFlag(1201) && EventFlag(74000303)) {
                BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
                SetNetworkconnectedEventFlag(1202, ON);
                SetEventFlag(70000150, ON);
                SetEventFlag(70000153, ON);
            }


            //  Quest Stage: Undead Settlement Pillage Success
            if (EventFlag(1202) && EventFlag(74000316)) {
                BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
                SetNetworkconnectedEventFlag(1203, ON);
            }


            //  Quest Stage: Irithyll Pillage
            if (EventFlag(1203) && EventFlag(74000306)) {
                BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
                SetNetworkconnectedEventFlag(1204, ON);
                SetEventFlag(70000151, ON);
            }


            //  Quest Stage: Irithyll Pillage Success
            if (EventFlag(1204) && EventFlag(74000318) && !EventFlag(1385) && !EventFlag(1366)) { // Patches Quest Stage // Siegward - Stage: Moved to Irithyll
                BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
                SetNetworkconnectedEventFlag(1205, ON);
                BatchSetNetworkconnectedEventFlags(1215, 1219, OFF);
                SetNetworkconnectedEventFlag(1218, ON);
            } else {

                // 
                if (EventFlag(1204) && EventFlag(74000318) && (EventFlag(1385) || EventFlag(1366))) { // Patches Quest Stage // Siegward - Stage: Moved to Irithyll
                    BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
                    SetNetworkconnectedEventFlag(1206, ON);
                }

                // Quest Stage: Lothric Pillage
                if (EventFlag(1206) && EventFlag(74000309)) {
                    BatchSetNetworkconnectedEventFlags(1200, 1214, OFF);
                    SetNetworkconnectedEventFlag(1207, ON);
                    BatchSetNetworkconnectedEventFlags(1215, 1219, OFF);
                    SetNetworkconnectedEventFlag(1218, ON); // "Killed"
                    SetEventFlag(70000152, ON);
                    Goto(L9);
                }
            }
        }

        // Hostility State
L9:
        SetEventFlag(70000062, OFF);
        if (EventFlag(1215)) { // "Passive"
            SetEventFlag(74000320, OFF);
        }
    }

    // Host State
L10:
    if (EventFlag(1200)) { // "Dead"
        DeactivateObject(4006720, Disabled);
    }
    if (!EventFlag(1201)) { // 
        if (!EventFlag(1203)) { // 
            if (!EventFlag(1206)) { // 
                ChangeCharacterEnableState(X0_4, Disabled);
                SetCharacterBackreadState(X0_4, true);
                EndEvent();
            }
        }
    }

    // Enabled
L0:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X4_4, -1, X0_4);
    GotoIf(L1, EventFlag(1216)); // "Hostile"
    GotoIf(L2, EventFlag(1218)); // "Killed"
    SetEventFlag(74000324, OFF); // Greirat cry pose


    if (EventFlag(74000301) && !EventFlag(74000325)) { // Loretta's Bone return dialogue // Given  Loretta's Bone
        ForceAnimationPlayback(X0_4, 91020, true, false, true, 0, 1); // Cry pose
        SetEventFlag(74000324, ON); // Greirat cry pose
        EndEvent();
    }

    ForceAnimationPlayback(X0_4, 90970, false, false, false, 0, 1); // Squat pose
    EndEvent();

    // Hostile
L1:
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndEvent();

    // Disabled + Force Treasure
L2:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndEvent();
});

// Siegward - Handle Quest Progression
$Event(14005701, Default, function() {
    EndIf(PlayerIsNotInOwnWorld());

    if (EventFlag(1383) && EventFlag(73500105)) { // Siegward - Stage: Well in Cathedral of the Deep

        BatchSetNetworkconnectedEventFlags(1380, 1394, OFF);
        SetNetworkconnectedEventFlag(1384, ON); // Siegward - Stage: Returned Armor
    }

    if (EventFlag(1384)) {
        BatchSetNetworkconnectedEventFlags(1380, 1394, OFF);
        SetNetworkconnectedEventFlag(1385, ON); // Siegward - Stage: Moved to Irithyll
    }
});

// Irina - Spawn State
$Event(14005720, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    if (!PlayerIsNotInOwnWorld()) {

        // Skip if any of the aggression flags are ON
        if (!AnyBatchEventFlags(1295, 1299)) {
            BatchSetNetworkconnectedEventFlags(1295, 1299, OFF);
            SetNetworkconnectedEventFlag(1295, ON); // "Passive"
        }


        // Skip Passive set if "Hostile" or Sin State: Irina (NO SIN) is present
        if (EventFlag(1296) && EventFlag(70000066)) { // Sin State: Irina // "Hostile"
            BatchSetNetworkconnectedEventFlags(1295, 1299, OFF);
            SetNetworkconnectedEventFlag(1295, ON); // "Passive"
        }

        // Skip if any of the NPC flags are ON
        if (!AnyBatchEventFlags(1280, 1294)) {
            BatchSetNetworkconnectedEventFlags(1280, 1294, OFF);
            SetNetworkconnectedEventFlag(1280, ON); // "Dead"
        }

        if (EventFlag(1295)) { // Goto Label 9 if "Hostile" is ON


            if (EventFlag(1281) && EventFlag(25009550)) { // Given Humanity // Quest Stage: In Firelink
                BatchSetNetworkconnectedEventFlags(1280, 1294, OFF);
                SetNetworkconnectedEventFlag(1282, ON); // Quest Stage: Dark Path: Boss Progress 1
            }


            if (EventFlag(1282) && EventFlag(25009550)) { // Given Humanity // Quest Stage: Dark Path: Boss Progress 1
                BatchSetNetworkconnectedEventFlags(1280, 1294, OFF);
                SetNetworkconnectedEventFlag(1283, ON); // Quest Stage: Dark Path: Boss Progress 2
            }


            if (EventFlag(1281) && EventFlag(25009551)) { // Given Holy Fragments // Quest Stage: In Firelink
                BatchSetNetworkconnectedEventFlags(1280, 1294, OFF);
                SetNetworkconnectedEventFlag(1286, ON); // Quest Stage: Holy Path: Is Firekeeper
                SetEventFlag(70000353, OFF); // Given Irina the Londor Braille Divine Tome
                SetEventFlag(70000354, OFF); // Unknown
            }
        }

L9:
        SetEventFlag(70000066, OFF); // Sin State: Irina
        SetEventFlag(74000352, OFF); // Wore Morne's Gauntlets
        BatchSetEventFlags(74000383, 74000392, OFF); // Reset Dark/Holy Path flags
    }

L10:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X24_4, -1, X0_4); // Normal position
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Area, X28_4, -1, X4_4); // Alt position
    WarpCharacterAndCopyFloor(X8_4, TargetEntityType.Area, X32_4, -1, X8_4); // Firekeeper position
    GotoIf(L1, EventFlag(1281)); // Quest Stage: In Firelink
    GotoIf(L2, EventFlag(1282)); // Quest Stage: Dark Path: Boss Progress 1
    GotoIf(L3, EventFlag(1283)); // Quest Stage: Dark Path: Boss Progress 2
    GotoIf(L4, EventFlag(1284)); // Quest Stage: Dark Path: Eygon fight
    GotoIf(L5, EventFlag(1285)); // Quest Stage: Dark Path: Eygon killed
    GotoIf(L6, EventFlag(1286)); // Quest Stage: Holy Path: Is Firekeeper
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    EndEvent();

    // Normal Position
L1:
L2:
L3:
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    if (!EventFlag(1298)) { // "Killed"
        ForceAnimationPlayback(X0_4, X12_4, true, false, true, 0, 1);
        EndEvent();
    }

    // Normal Position - Disabled + Force Treaure
L18:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndEvent();

    // Alt Position
L4:
L5:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    if (!EventFlag(1298)) { // "Killed"

        if (!EventFlag(14000722)) { // Had "First meeting"
            ForceAnimationPlayback(X4_4, X16_4, true, false, true, 0, 1);
            EndEvent();
        }

        ForceAnimationPlayback(X4_4, X12_4, true, false, true, 0, 1);
        EndEvent();
    }

    // Alt Position - Disabled + Force Treaure
L18:
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X4_4);
    EndEvent();

    // Firekeeper Position
L6:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    if (!EventFlag(1298)) { // "Killed"
        ForceAnimationPlayback(X8_4, X20_4, true, false, true, 0, 1);
        EndEvent();
    }

    // Firekeeper Position - Disabled + Force Treaure
L18:
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X8_4);
    EndEvent();
});

// Irina - First meeting situp
$Event(14005722, Default, function(X0_4, X4_4) {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(EventFlag(14000722)); // Had "First meeting"
    WaitFor(EventFlag(14000722)); // Had "First meeting"
    ForceAnimationPlayback(X0_4, X4_4, false, true, false, 0, 1);
    SetEventFlag(14005722, ON);
});

// Irina - 
$Event(14005723, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4, X32_4) {
    EndIf(PlayerIsNotInOwnWorld());

    SetEventFlag(X4_4, OFF);

    WaitFor(EventFlag(X4_4) && EventFlag(X8_4) && EventFlag(X12_4) && HPRatio(X0_4) != 0);

    SetEventFlag(X4_4, OFF);
    BatchSetNetworkconnectedEventFlags(X20_4, X24_4, OFF);
    SetNetworkconnectedEventFlag(X16_4, ON);

    SetCharacterInvincibility(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Disabled);
    ChangeCharacterEnableState(X28_4, Enabled);
    SetCharacterBackreadState(X28_4, false);
    ForceAnimationPlayback(X28_4, X32_4, false, false, false, 0, 1);

    SaveRequest(0);

    SetSpEffect(X0_4, 4640);

    WaitFixedTimeSeconds(5);

    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
});

// Irina - Unused
$Event(14005725, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(PlayerIsNotInOwnWorld());

    WaitFor(EventFlag(0));
    if (!InArea(10000, 0)) {

        RotateCharacter(10000, 0, 69070, false);

        WaitFixedTimeFrames(1);
        sp = !CharacterHasSpEffect(10000, 150);
        flagTime = !EventFlag(0) || ElapsedFrames(89);

        WaitFor(InArea(10000, 0) || sp || flagTime);

        if (sp.Passed) {
            SetEventFlag(0, OFF);
            RestartEvent();
        }

        if (flagTime.Passed) {
            ForceAnimationPlayback(10000, 0, false, false, false, 0, 1);
            SetEventFlag(0, OFF);

            RestartEvent();
        }
    }

L20:
    RotateCharacter(10000, 0, 0, true);

    WaitFixedTimeFrames(1);

    SetEventFlag(0, ON);
    sp2 = !CharacterHasSpEffect(10000, 150);

    WaitFor(!EventFlag(0) || sp2);

    if (sp2.Passed) {
        SetEventFlag(0, OFF);
        SetEventFlag(0, OFF);
        RestartEvent();
    }

    SetEventFlag(0, OFF);
    ForceAnimationPlayback(10000, 0, false, true, false, 0, 1);
    RestartEvent();
});

// Yoel - Spawn State
$Event(14005740, Default, function(X0_4, X4_4, X8_4) {
    if (!PlayerIsNotInOwnWorld()) {

        // Skip if any of the aggression flags are ON
        if (!AnyBatchEventFlags(1075, 1079)) {
            BatchSetNetworkconnectedEventFlags(1075, 1079, OFF);
            SetNetworkconnectedEventFlag(1075, ON); // "Passive"
        }

        // Skip Passive set if "Hostile" or Sin State: Yoel (NO SIN) is present

        if (EventFlag(1076) && EventFlag(70000055)) { // Sin State: Yoel (NO SIN) // "Hostile"
            BatchSetNetworkconnectedEventFlags(1075, 1079, OFF);
            SetNetworkconnectedEventFlag(1075, ON); // "Passive"
        }

        // Skip if any of the NPC flags are ON
        if (!AnyBatchEventFlags(1060, 1074)) {
            BatchSetNetworkconnectedEventFlags(1060, 1074, OFF);
            SetNetworkconnectedEventFlag(1060, ON); // "Dead"
        }

        if (EventFlag(1075)) { // Goto Label 0 if "Hostile" is ON


            if (EventFlag(1060) && EventFlag(73100152)) { // Invited to Firelink // "Dead"
                BatchSetNetworkconnectedEventFlags(1060, 1074, OFF);
                SetNetworkconnectedEventFlag(1061, ON); // Quest Stage: In Firelink
            }

            // Skip if not in Firelink or levels remain

            if (EventFlag(1061) && YoelLevelCount() <= 0) { // Extracted all Levels // Quest Stage: In Firelink
                BatchSetNetworkconnectedEventFlags(1060, 1074, OFF);
                SetNetworkconnectedEventFlag(1062, ON); // Quest Stage: Yoel Collapse
                BatchSetNetworkconnectedEventFlags(1075, 1079, OFF);
                SetNetworkconnectedEventFlag(1078, ON); // "Killed"
            }


            if (EventFlag(1061) && EventFlag(25001009)) { // Killed Pontiff Sulyvahn // Quest Stage: In Firelink
                BatchSetNetworkconnectedEventFlags(1060, 1074, OFF);
                SetNetworkconnectedEventFlag(1064, ON); // Quest Stage: In Firelink (fail due to Catacombs)
                BatchSetNetworkconnectedEventFlags(1075, 1079, OFF);
                SetNetworkconnectedEventFlag(1078, ON); // "Killed"
            }


            if (EventFlag(1060) && EventFlag(25001009)) { // Killed Pontiff Sulyvahn // "Dead"
                BatchSetNetworkconnectedEventFlags(1060, 1074, OFF);
                SetNetworkconnectedEventFlag(1063, ON); // Quest Stage: In Undead Settlement (fail due to Pontiff Sulyvahn Kill)
                BatchSetNetworkconnectedEventFlags(1075, 1079, OFF);
                SetNetworkconnectedEventFlag(1078, ON); // "Killed"
            }
        }

        // Hostility
L9:
        SetEventFlag(70000055, OFF); // Sin State: Yoel
        BatchSetEventFlags(74000430, 74000433, OFF);
    }

    // Client State
L10:
    GotoIf(L0, EventFlag(1061)); // Quest Stage: In Firelink
    GotoIf(L2, EventFlag(1062)); // Quest Stage: Yoel Collapse
    GotoIf(L2, EventFlag(1064)); // Quest Stage: In Firelink (fail due to Pontiff Sulyvahn Kill)

    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();

    // Host State
L0:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    if (!EventFlag(1078)) { // "Killed"
        EndEvent();
    }

    // Killed State (Normal)
L1:
    ForceCharacterTreasure(X0_4);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();

    // Killed State (Quest End)
L2:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    EzstateInstructionRequest(X0_4, X4_4, 1);
    ForceCharacterTreasure(X0_4);
    EndEvent();
});

// Leonhard - Spawn State
$Event(14005750, Default, function(X0_4, X4_4, X8_4) {
    if (!PlayerIsNotInOwnWorld()) {

        // Skip if any of the aggression flags are ON
        if (!AnyBatchEventFlags(1155, 1159)) {
            BatchSetNetworkconnectedEventFlags(1155, 1159, OFF);
            SetNetworkconnectedEventFlag(1155, ON); // "Passive"
        }

        // Skip Passive set if "Hostile" or ""Sin State: Leonhard" (NO SIN) is present

        if (EventFlag(1156) && EventFlag(70000059)) { // Sin State: Leonhard (NO SIN) // "Hostile"
            BatchSetNetworkconnectedEventFlags(1155, 1159, OFF);
            SetNetworkconnectedEventFlag(1155, ON); // "Passive"
        }

        // Skip if any of the NPC flags are ON
        if (!AnyBatchEventFlags(1140, 1154)) {
            BatchSetNetworkconnectedEventFlags(1140, 1154, OFF);
            SetNetworkconnectedEventFlag(1140, ON); // "Dead"
        }

        if (EventFlag(1155)) { // Goto Label 9 if "Passive" is OFF


            if (EventFlag(1140) && (EventFlag(13000005) || EventFlag(9301))) { // "Dead" // Vordt Killed // Knight's Rest enabled
                BatchSetNetworkconnectedEventFlags(1140, 1154, OFF);
                SetNetworkconnectedEventFlag(1141, ON); // Quest Stage: Vordt Killed
            }


            if (EventFlag(1141) && EventFlag(74000850)) { // Given Cracked Red Eye Orbs // Quest Stage: Vordt Killed
                BatchSetNetworkconnectedEventFlags(1140, 1154, OFF);
                SetNetworkconnectedEventFlag(1142, ON); // Quest Stage: Cracked Red Eye Orbs
            }


            if (EventFlag(1142)
                && PlayerHasItem(ItemType.Goods, 373)
                && (EventFlag(13100002) || EventFlag(9303))) { // Quest Stage: Cracked Red Eye Orbs // Pale Tongue // Curse-Rotted Greatwood Killed // Undead Settlement bonfire
                BatchSetNetworkconnectedEventFlags(1140, 1154, OFF);
                SetNetworkconnectedEventFlag(1143, ON); // Quest Stage: Greatwood Killed
            }


            if (EventFlag(1143) && EventFlag(74000851)) { // Want Red Eye Orb // Quest Stage: Greatwood Killed
                BatchSetNetworkconnectedEventFlags(1140, 1154, OFF);
                SetNetworkconnectedEventFlag(1144, ON); // Quest Stage: Find Red Eye Orb
            }


            if (EventFlag(1144) && EventFlag(13000380)) { // Killed Darkwraith in High Wall // Quest Stage: Find Red Eye Orb
                BatchSetNetworkconnectedEventFlags(1140, 1154, OFF);
                SetNetworkconnectedEventFlag(1145, ON); // Quest Stage: Found Red Eye Orb
            }
        }

        // Hostility
L9:
        SetEventFlag(70000059, OFF); // Sin State: Leonhard (SIN)
        if (EventFlag(1155)) { // "Passive" is OFF
            SetEventFlag(74000870, OFF); // Made Hostile
        }
    }

    // Client State
L10:
    if (!EventFlag(1141)) { // Quest Stage: Vordt Killed
        if (!EventFlag(1143)) { // Quest Stage: Greatwood Killed
            if (!EventFlag(1145)) { // Quest Stage: Found Red Eye Orb
                ChangeCharacterEnableState(X0_4, Disabled);
                SetCharacterBackreadState(X0_4, true);
                EndEvent();
            }
        }
    }

    // Host State
L0:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X8_4, -1, X0_4);
    GotoIf(L16, EventFlag(1156)); // "Hostile"
    GotoIf(L18, EventFlag(1158)); // "Killed"
    ForceAnimationPlayback(X0_4, X4_4, true, false, true, 0, 1);
    EndEvent();

    // Hostile State
L16:
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndEvent();

    // Killed State
L18:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndEvent();
});

// Cornyx - Spawn State
$Event(14005760, Default, function(X0_4, X4_4) {
    if (!PlayerIsNotInOwnWorld()) {

        // Skip if any of the aggression flags are ON
        if (!AnyBatchEventFlags(1255, 1259)) {
            BatchSetNetworkconnectedEventFlags(1255, 1259, OFF);
            SetNetworkconnectedEventFlag(1255, ON); // "Passive"
        }

        // Skip Passive set if "Hostile" or Sin State: Cornyx (NO SIN) is present

        if (EventFlag(1256) && EventFlag(70000064)) { // Sin State: Cornyx (NO SIN) // "Hostile"
            BatchSetNetworkconnectedEventFlags(1255, 1259, OFF);
            SetNetworkconnectedEventFlag(1255, ON); // "Passive"
            SetEventFlag(74000460, OFF); // Made Hostile
        }

        // Skip if any of the NPC flags are ON
        if (!AnyBatchEventFlags(1240, 1254)) {
            BatchSetNetworkconnectedEventFlags(1240, 1254, OFF);
            SetNetworkconnectedEventFlag(1240, ON); // "Dead"
        }

        // Sin Flag
        SetEventFlag(70000064, OFF); // Sin State: Cornyx (SIN)
    }

    // Client State
L9:
    if (!EventFlag(1241)) { // Goto Label 0 if "Is in Host World" is ON
        ChangeCharacterEnableState(X0_4, Disabled);
        SetCharacterBackreadState(X0_4, true);
        DeactivateObject(X4_4, Disabled);
        EndEvent();
    }

    // Host State
L0:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, 4004735, -1, X0_4); // Move to Position
    GotoIf(L10, EventFlag(1256)); // Goto Label 0 if  "Hostile" is ON
    GotoIf(L11, EventFlag(1258)); // Goto Label 0 if  "Killed" is ON
    ForceAnimationPlayback(X0_4, 90450, false, false, false, 0, 1);
    EndEvent();

    // Hostile State
L10:
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndEvent();

    // Killed State
L11:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndEvent();
});

// Karla - Spawn State
$Event(14005780, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (!PlayerIsNotInOwnWorld()) {

        // Skip if any of the aggression flags are ON
        if (!AnyBatchEventFlags(1275, 1279)) {
            BatchSetNetworkconnectedEventFlags(1275, 1279, OFF);
            SetNetworkconnectedEventFlag(1275, ON); // "Passive"
        }

        // Skip Passive set if "Hostile" or Sin State: Karla (NO SIN) is present

        if (EventFlag(1276) && EventFlag(70000065)) { // Sin State: Karla (NO SIN) // "Hostile"
            BatchSetNetworkconnectedEventFlags(1275, 1279, OFF);
            SetNetworkconnectedEventFlag(1275, ON); // "Passive"
        }

        // Skip if any of the NPC flags are ON
        if (!AnyBatchEventFlags(1260, 1274)) {
            BatchSetNetworkconnectedEventFlags(1260, 1274, OFF);
            SetNetworkconnectedEventFlag(1260, ON); // "Dead"
        }

        if (EventFlag(1275)) { // Goto Label 9 if "Passive" is OFF
        }

        // Sin Flag
L9:
        SetEventFlag(70000065, OFF); // "Sin State: Karla" (SIN)
    }

    // Client State
L10:
    if (!EventFlag(1261)) { // Goto Label 0 if "Is in Host World" is ON
        ChangeCharacterEnableState(X0_4, Disabled);
        SetCharacterBackreadState(X0_4, true);
        DeactivateObject(X8_4, Disabled);
        EndEvent();
    }

    // Host State
L0:
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Area, X12_4, -1, X0_4);
    if (!EventFlag(1278)) { // Goto Label 1 if "Killed" is ON
        ForceAnimationPlayback(X0_4, X4_4, false, false, false, 0, 1);
        EndEvent();
    }

    // Killed State
L1:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(X0_4);
    EndEvent();
});

// ----------------------------------------
// Secret Warp - Fogwall
// ----------------------------------------
$Event(14005800, Restart, function() {
    DeleteObjectfollowingSFX(4001840, true);
    CreateObjectfollowingSFX(4001840, 101, 3);
});

// ----------------------------------------
// Secret Warp - Gesture
// ----------------------------------------
$Event(14005801, Restart, function() {
    WaitFor(InArea(10000, 4002927) && CharacterHasSpEffect(10000, 12511));
    WarpPlayer(40, 0, 4000985);
    EndEvent();
});

// ----------------------------------------
// Secret Path - Cemetery of Ash
// ----------------------------------------
$Event(14005810, Restart, function() {
    const obj_Path1 = 4001841;
    const obj_Path2 = 4001842;
    const obj_Path3 = 4001843;

    const ffxID = 302020;

    DeleteObjectfollowingSFX(obj_Path1, true);
    CreateObjectfollowingSFX(obj_Path1, 101, ffxID);

    DeleteObjectfollowingSFX(obj_Path2, true);
    CreateObjectfollowingSFX(obj_Path2, 101, ffxID);

    DeleteObjectfollowingSFX(obj_Path3, true);
    CreateObjectfollowingSFX(obj_Path3, 101, ffxID);

    WaitRandomTimeSeconds(3, 6);

    DeleteObjectfollowingSFX(obj_Path1, true);
    DeleteObjectfollowingSFX(obj_Path2, true);
    DeleteObjectfollowingSFX(obj_Path3, true);

    WaitRandomTimeSeconds(15, 30);

    RestartEvent();
});

// ----------------------------------------
// Secret Path - Untended Graves
// ----------------------------------------
$Event(14005811, Restart, function() {
    const obj_Path1 = 4001841;
    const obj_Path2 = 4001842;
    const obj_Path3 = 4001843;

    DeactivateObject(obj_Path1, Disabled);
    DeactivateObject(obj_Path2, Disabled);
    DeactivateObject(obj_Path3, Disabled);
});

// ----------------------------------------
// Secret Message - CINDERS
// ----------------------------------------
$Event(14005820, Restart, function() {
    const entity_group_MessageLizards = 4005950;
    const trigger_GestureZone         = 4002928;
    const param_SpEffect_Gesture      = 12510;

    ChangeCharacterEnableState(entity_group_MessageLizards, Disabled);
    SetCharacterAnimationState(entity_group_MessageLizards, Disabled);
    SetCharacterAIState(entity_group_MessageLizards, Disabled);
    SetCharacterGravity(entity_group_MessageLizards, Disabled);

    WaitFor(
        InArea(10000, trigger_GestureZone) && CharacterHasSpEffect(10000, param_SpEffect_Gesture));

    ChangeCharacterEnableState(entity_group_MessageLizards, Enabled);
    SetCharacterAnimationState(entity_group_MessageLizards, Enabled);

    EndEvent();
});

// ----------------------------------------
// Crow Trade
// ----------------------------------------
$Event(14005821, Restart, function() {
    // Stones
    InitializeCrowTrade(ItemType.Goods, 2300, 200000, -1, 74000996);
    InitializeCrowTrade(ItemType.Goods, 2301, 200010, -1, 74000996);
    InitializeCrowTrade(ItemType.Goods, 2302, 200020, -1, 74000996);
    InitializeCrowTrade(ItemType.Goods, 2303, 200030, -1, 74000996);
    InitializeCrowTrade(ItemType.Goods, 2304, 200040, -1, 74000996);
    InitializeCrowTrade(ItemType.Goods, 2305, 200050, -1, 74000996);
    InitializeCrowTrade(ItemType.Goods, 2306, 200060, -1, 74000996);
    InitializeCrowTrade(ItemType.Goods, 2307, 200070, -1, 74000996);
    InitializeCrowTrade(ItemType.Goods, 2308, 200080, -1, 74000996);
    InitializeCrowTrade(ItemType.Goods, 2309, 200090, -1, 74000996);

    // Specific
    InitializeCrowTrade(ItemType.Goods, 2141, 200100, -1, 74000996); // Estus Shard
    InitializeCrowTrade(ItemType.Goods, 2143, 200110, -1, 74000996); // Undead Bone Shard
    InitializeCrowTrade(ItemType.Ring, 20430, 200120, -1, 74000996); // Skull Ring
    InitializeCrowTrade(ItemType.Goods, 380, 200130, -1, 74000996); // Rubbish

});

// ----------------------------------------
// Abyss - Access
// ----------------------------------------
$Event(14005822, Restart, function() {
    WaitFor(EventFlag(25009760));

    SetEventFlag(25009760, OFF);
    WarpPlayer(40, 0, 4000986);
    SetMapCeremony(40, 0, 10);
});

// ----------------------------------------
// Abyss - Warp Walls
// ----------------------------------------
$Event(14005823, Restart, function() {
    WaitFor(
        InArea(10000, 4002930)
            || InArea(10000, 4002931)
            || InArea(10000, 4002932)
            || InArea(10000, 4002933));
    IssueShortWarpRequest(10000, TargetEntityType.Area, 4002971, -1);

    RestartEvent();
});

// ----------------------------------------
// Pot King Greg - Door
// ----------------------------------------
$Event(14005825, Restart, function() {
    // IfCharacterHasSpeffect(AND_01, 10000, 12526, true, ComparisonType.Equal, 1); // Toast
    WaitFor(InArea(10000, 4002200) && CharacterHasSpEffect(10000, 12514));

    ForceAnimationPlayback(4001251, 0, false, false, false, 0, 1);

    DeactivateObjactAssignIdx(4001251, 1400340, 0, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 1, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 2, Disabled);
    DeactivateObjactAssignIdx(4001251, 1400340, 3, Disabled);
});

// ----------------------------------------
// Starting Cell - Door
// ----------------------------------------
$Event(14005826, Restart, function() {
    WaitFor(EventFlag(25000100));

    ForceAnimationPlayback(4001252, 0, false, false, false, 0, 1);

    DeactivateObjactAssignIdx(4001252, 1400340, 0, Disabled);
    DeactivateObjactAssignIdx(4001252, 1400340, 1, Disabled);
    DeactivateObjactAssignIdx(4001252, 1400340, 2, Disabled);
    DeactivateObjactAssignIdx(4001252, 1400340, 3, Disabled);
});

// ----------------------------------------
// Corrupted Gundyr - Setup
// ----------------------------------------
$Event(14005900, Restart, function() {
    const entity_CorruptedGundyr = 4000800;

    const trigger_CorruptedGundyr_FogwallZone1 = 4002861;
    const trigger_CorruptedGundyr_FogwallZone2 = 4002862;

    const flag_CorruptedGundyr_Defeated   = 14000800;
    const flag_CorruptedGundyr_InBattle   = 14005805;
    const flag_CorruptedGundyr_InProgress = 14000801;

    const name_CorruptedGundyr = 207060;

    // Disable at init
    SetCharacterAIState(entity_CorruptedGundyr, Disabled);
    ChangeCharacterEnableState(entity_CorruptedGundyr, Disabled);
    SetCharacterAnimationState(entity_CorruptedGundyr, Disabled);

    // End function if Corrupted Gundyr has already been defeated
    EndIf(EventFlag(flag_CorruptedGundyr_Defeated));

    // Disable secret path
    DeactivateObject(4001841, Disabled);
    DeactivateObject(4001842, Disabled);
    DeactivateObject(4001843, Disabled);

    // Enable entities
    ChangeCharacterEnableState(entity_CorruptedGundyr, Enabled);

    // Play initial pose
    //ForceAnimationPlayback(entity_CorruptedGundyr, 20000, true, false, false, 0, 1);

    // Play rise up pose once player enters arena
    WaitFor(
        EventFlag(flag_CorruptedGundyr_InBattle)
            && (InArea(10000, trigger_CorruptedGundyr_FogwallZone1)
                || InArea(10000, trigger_CorruptedGundyr_FogwallZone2)));

    SetEventFlag(flag_CorruptedGundyr_InProgress, ON);

    SetLockOnPoint(entity_CorruptedGundyr, 221, Disabled);

    //WaitFixedTimeSeconds(2);
    //ForceAnimationPlayback(entity_CorruptedGundyr, 1500, false, false, false, 0, 1);

L0:
    // Setup entities fully
    SetCharacterGravity(entity_CorruptedGundyr, Enabled);
    SetCharacterAnimationState(entity_CorruptedGundyr, Enabled);
    SetCharacterAIState(entity_CorruptedGundyr, Enabled);
    SetNetworkUpdateRate(entity_CorruptedGundyr, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateMultiplayerdependantBuffs(entity_CorruptedGundyr);

    if (NumberOfClientsOfType(ClientType.Invader) != 0) {
        SetNetworkUpdateAuthority(entity_CorruptedGundyr, AuthorityLevel.Forced);
    }

    DisplayBossHealthBar(Enabled, entity_CorruptedGundyr, 0, name_CorruptedGundyr);
});

// ----------------------------------------
// Corrupted Gundyr - Kill
// ----------------------------------------
$Event(14005901, Default, function() {
    const entity_CorruptedGundyr = 4000800;

    const obj_CorruptedGundyr_Fogwall     = 4001820;
    const obj_CorruptedGundyr_BackFogwall = 4001821;

    const flag_CorruptedGundyr_Defeated = 14000800;
    const flag_CorruptedGundyr_InProgress = 14000801;

    // End function if Corrupted Gundyr has already been defeated
    EndIf(EventFlag(flag_CorruptedGundyr_Defeated));

    WaitFor(HPRatio(entity_CorruptedGundyr) <= 0);
    WaitFixedTimeSeconds(1);
    PlaySE(entity_CorruptedGundyr, SoundType.s_SFX, 777777777);
    DeactivateObject(obj_CorruptedGundyr_Fogwall, Disabled);
    DeactivateObject(obj_CorruptedGundyr_BackFogwall, Disabled);
    WaitFixedTimeSeconds(4);
    HandleBossDefeat(entity_CorruptedGundyr);
    SetEventFlag(flag_CorruptedGundyr_Defeated, ON);
    SetEventFlag(flag_CorruptedGundyr_InProgress, OFF);
    SetEventFlag(9319, ON);
    SetEventFlag(6319, ON);

    // Boss Kill
    InitializeCommonEvent(20020000, 25001001, 25002001, 260150002, 120000); 

    // Enable secret path
    DeactivateObject(4001841, Enabled);
    DeactivateObject(4001842, Enabled);
    DeactivateObject(4001843, Enabled);
});


// ----------------------------------------
// Corrupted Gundyr - Fogwalls
// ----------------------------------------
$Event(14005902, Restart, function() {
    const entity_CorruptedGundyr = 4000800;

    const obj_CorruptedGundyr_Fogwall     = 4001820;
    const obj_CorruptedGundyr_BackFogwall = 4001821;

    const trigger_CorruptedGundyr_FogwallZone1 = 4002861;
    const trigger_CorruptedGundyr_FogwallZone2 = 4002862;

    const sound_CorruptedGundyr_BGM = 4004825;

    const flag_CorruptedGundyr_Defeated        = 14000800;
    const flag_CorruptedGundyr_InBattle        = 14005805;
    const flag_CorruptedGundyr_ClientEnter     = 14005806;
    const flag_CorruptedGundyr_BossStart       = 14005900; // Event ID flag

    const param_CorruptedGundyr_ActionButton = 4001800;

    // Fogwall - Cemetery Side
    InitializeCommonEvent(20005800, flag_CorruptedGundyr_Defeated, obj_CorruptedGundyr_Fogwall, trigger_CorruptedGundyr_FogwallZone1, flag_CorruptedGundyr_InBattle, param_CorruptedGundyr_ActionButton, entity_CorruptedGundyr, 0, trigger_CorruptedGundyr_FogwallZone1);
    InitializeCommonEvent(20005801, flag_CorruptedGundyr_Defeated, obj_CorruptedGundyr_Fogwall, trigger_CorruptedGundyr_FogwallZone1, flag_CorruptedGundyr_InBattle, param_CorruptedGundyr_ActionButton, flag_CorruptedGundyr_ClientEnter);
    InitializeCommonEvent(20005820, flag_CorruptedGundyr_Defeated, obj_CorruptedGundyr_Fogwall, 3, 0);
    InitializeCommonEvent(20005810, flag_CorruptedGundyr_Defeated, obj_CorruptedGundyr_Fogwall, trigger_CorruptedGundyr_FogwallZone1, 10000);

    // Fogwall - Firelink Side
    InitializeCommonEvent(20005800, flag_CorruptedGundyr_Defeated, obj_CorruptedGundyr_BackFogwall, trigger_CorruptedGundyr_FogwallZone2, flag_CorruptedGundyr_InBattle, param_CorruptedGundyr_ActionButton, entity_CorruptedGundyr, 0, trigger_CorruptedGundyr_FogwallZone2);
    InitializeCommonEvent(20005801, flag_CorruptedGundyr_Defeated, obj_CorruptedGundyr_BackFogwall, trigger_CorruptedGundyr_FogwallZone2, flag_CorruptedGundyr_InBattle, param_CorruptedGundyr_ActionButton, flag_CorruptedGundyr_ClientEnter);
    InitializeCommonEvent(20005820, flag_CorruptedGundyr_Defeated, obj_CorruptedGundyr_BackFogwall, 3, 0);
    InitializeCommonEvent(20005810, flag_CorruptedGundyr_Defeated, obj_CorruptedGundyr_BackFogwall, trigger_CorruptedGundyr_FogwallZone2, 10000);

    // Corrupted Gundyr - Boss Sound State
    InitializeCommonEvent(20001834, flag_CorruptedGundyr_Defeated, flag_CorruptedGundyr_InBattle, flag_CorruptedGundyr_BossStart, sound_CorruptedGundyr_BGM);
});

// ----------------------------------------
// Corrupted Gundyr - Invalidation
// ----------------------------------------
$Event(14005903, Restart, function() {
    const trigger_CorruptedGundyr_FogwallZone1 = 4002861;
    const trigger_CorruptedGundyr_FogwallZone2 = 4002862;

    const entity_PlayerPoint = 4000980;
    const entity_SpawnPoint  = 4002970;

    const flag_CorruptedGundyr_Defeated   = 14000800;
    const flag_CorruptedGundyr_InProgress = 14000801;

    const mapID   = 40;
    const blockID = 0;
    const ceremonyID = 0

    // End function if boss has already been defeated
    EndIf(EventFlag(flag_CorruptedGundyr_Defeated));
    // End function if not started
    EndIf(!EventFlag(flag_CorruptedGundyr_InProgress));

    // Warp player outside of arena if in invalidation zone
    if (EventFlag(flag_CorruptedGundyr_InProgress)
        && (InArea(10000, trigger_CorruptedGundyr_FogwallZone1)
            || InArea(10000, trigger_CorruptedGundyr_FogwallZone2))) {

        SetEventFlag(flag_CorruptedGundyr_InProgress, OFF);
        SetPlayerRespawnPoint(entity_SpawnPoint);
        SetMapCeremony(mapID, blockID, ceremonyID);
        WaitFixedTimeFrames(1);
        SaveRequest(0);
        WaitFixedTimeFrames(1);
        WarpPlayer(mapID, blockID, entity_PlayerPoint);
    }

    // Fallback
    SetEventFlag(flag_CorruptedGundyr_InProgress, OFF);

    EndEvent();
});

// ----------------------------------------
// Corrupted Gundyr - Dark Tears
// ----------------------------------------
$Event(14005904, Restart, function() {
    const entity_CorruptedGundyr = 4000800;

    const flag_CorruptedGundyr_Defeated   = 14000800;
    const flag_CorruptedGundyr_InProgress = 14000801;
    const flag_CorruptedGundyr_InBattle   = 14005805;

    const flag_RandomFlagStart = 14006000;
    const flag_RandomFlagEnd   = 14006012;

    // End function if boss has already been defeated
    EndIf(EventFlag(flag_CorruptedGundyr_Defeated));

    // Wait for boss to start
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, flag_CorruptedGundyr_InBattle);

    // Boss is below 75% HP
    WaitFor(HPRatio(entity_CorruptedGundyr) < 0.75);

    // Fire bullet at random location
    BatchSetEventFlags(flag_RandomFlagStart, flag_RandomFlagEnd, OFF);
    RandomlySetEventFlagInRange(flag_RandomFlagStart, flag_RandomFlagEnd, ON);

    if (EventFlag(14006000)) {
        ShootBullet(entity_CorruptedGundyr, 4002830, -1, 251100950, 0, 0, 0);
    }

    if (EventFlag(14006001)) {
        ShootBullet(entity_CorruptedGundyr, 4002831, -1, 251100950, 0, 0, 0);
    }

    if (EventFlag(14006002)) {
        ShootBullet(entity_CorruptedGundyr, 4002832, -1, 251100950, 0, 0, 0);
    }

    if (EventFlag(14006003)) {
        ShootBullet(entity_CorruptedGundyr, 4002833, -1, 251100950, 0, 0, 0);
    }

    if (EventFlag(14006004)) {
        ShootBullet(entity_CorruptedGundyr, 4002834, -1, 251100950, 0, 0, 0);
    }

    if (EventFlag(14006005)) {
        ShootBullet(entity_CorruptedGundyr, 4002835, -1, 251100950, 0, 0, 0);
    }

    if (EventFlag(14006006)) {
        ShootBullet(entity_CorruptedGundyr, 4002836, -1, 251100950, 0, 0, 0);
    }

    if (EventFlag(14006007)) {
        ShootBullet(entity_CorruptedGundyr, 4002837, -1, 251100950, 0, 0, 0);
    }

    if (EventFlag(14006008)) {
        ShootBullet(entity_CorruptedGundyr, 4002838, -1, 251100950, 0, 0, 0);
    }

    if (EventFlag(14006009)) {
        ShootBullet(entity_CorruptedGundyr, 4002839, -1, 251100950, 0, 0, 0);
    }

    if (EventFlag(14006010)) {
        ShootBullet(entity_CorruptedGundyr, 4002840, -1, 251100950, 0, 0, 0);
    }

    if (EventFlag(14006011)) {
        ShootBullet(entity_CorruptedGundyr, 4002841, -1, 251100950, 0, 0, 0);
    }

    if (EventFlag(14006012)) {
        ShootBullet(entity_CorruptedGundyr, 4002842, -1, 251100950, 0, 0, 0);
    }

    // Base cooldown
    WaitFixedTimeSeconds(0.5);

    // Apply additional cooldown if boss is above 60%
    if (HPRatio(entity_CorruptedGundyr) >= 0.5) {
        WaitFixedTimeSeconds(2.0);
    }

    // Apply additional cooldown if boss is above 40%
    if (HPRatio(entity_CorruptedGundyr) >= 0.25) {
        WaitFixedTimeSeconds(2.0);
    }

    // Apply additional cooldown if boss is above 20%
    if (HPRatio(entity_CorruptedGundyr) >= 0.2) {
        WaitFixedTimeSeconds(1.0);
    }

    // Apply additional cooldown if boss is above 10%
    if (HPRatio(entity_CorruptedGundyr) >= 0.1) {
        WaitFixedTimeSeconds(1.0);
    }

    RestartEvent();
});

// ----------------------------------------
// The Marauder - Setup
// ----------------------------------------
$Event(14005890, Restart, function() {
    const entity_Marauder = 4000850;

    const trigger_Marauder_FogwallZone = 4002821;
    const trigger_Marauder_StartZone   = 4002822;

    const flag_Marauder_Defeated   = 14000850;
    const flag_Marauder_InBattle   = 14005855;
    const flag_Marauder_InProgress = 14000851;

    const name_Marauder = 207100;

    // Disable at init
    ChangeCharacterEnableState(entity_Marauder, Disabled);
    SetCharacterAnimationState(entity_Marauder, Disabled);
    SetCharacterAIState(entity_Marauder, Disabled);

    // End function if The Marauder has already been defeated
    EndIf(EventFlag(flag_Marauder_Defeated));

    // Enable entities
    ChangeCharacterEnableState(entity_Marauder, Enabled);
    SetCharacterAnimationState(entity_Marauder, Disabled);

    // Play initial pose
    ForceAnimationPlayback(entity_Marauder, 700, true, false, false, 0, 1);

    // Play rise up pose once player enters arena
    WaitFor(EventFlag(flag_Marauder_InBattle) && InArea(10000, trigger_Marauder_StartZone));

    SetEventFlag(flag_Marauder_InProgress, ON);

    ForceAnimationPlayback(entity_Marauder, 1700, false, false, false, 0, 1);

L0:
    // Setup entities fully
    SetCharacterGravity(entity_Marauder, Enabled);
    SetCharacterAnimationState(entity_Marauder, Enabled);
    SetCharacterAIState(entity_Marauder, Enabled);
    SetNetworkUpdateRate(entity_Marauder, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateMultiplayerdependantBuffs(entity_Marauder);

    if (NumberOfClientsOfType(ClientType.Invader) != 0) {
        SetNetworkUpdateAuthority(entity_Marauder, AuthorityLevel.Forced);
    }

    WaitFixedTimeSeconds(2.0);

    DisplayBossHealthBar(Enabled, entity_Marauder, 0, name_Marauder);
});

// ----------------------------------------
// The Marauder - Kill
// ----------------------------------------
$Event(14005891, Default, function() {
    const entity_Marauder = 4000850;

    const obj_Marauder_Fogwall = 4001822;

    const flag_Marauder_Defeated   = 14000850;
    const flag_Marauder_InProgress = 14000851;

    // End function if The Marauder has already been defeated
    EndIf(EventFlag(flag_Marauder_Defeated));

    WaitFor(HPRatio(entity_Marauder) <= 0);
    WaitFixedTimeSeconds(1);
    PlaySE(entity_Marauder, SoundType.s_SFX, 777777777);
    DeactivateObject(obj_Marauder_Fogwall, Disabled);
    WaitFixedTimeSeconds(4);
    HandleBossDefeat(entity_Marauder);
    SetEventFlag(flag_Marauder_Defeated, ON);
    SetEventFlag(flag_Marauder_InProgress, OFF);
    SetEventFlag(9348, ON);
    SetEventFlag(6348, ON);

    // Boss Kill
    InitializeCommonEvent(20020000, 25001035, 25002035, 260150005, 120320); 
});


// ----------------------------------------
// The Marauder - Fogwalls
// ----------------------------------------
$Event(14005892, Restart, function() {
    const obj_Marauder_Fogwall = 4001822;

    const sound_Marauder_BGM = 4004820;

    const trigger_Marauder_FogwallZone = 4002821;

    const flag_Marauder_Defeated    = 14000850;
    const flag_Marauder_InBattle    = 14005855;
    const flag_Marauder_ClientEnter = 14005856;
    const flag_Marauder_BossStart   = 14005890; // Event ID flag

    const param_Marauder_ActionButton = 4001850;

    //  Enter Boss Room
    InitializeCommonEvent(20005800, flag_Marauder_Defeated, obj_Marauder_Fogwall, trigger_Marauder_FogwallZone, flag_Marauder_InBattle, param_Marauder_ActionButton, 0, 0, trigger_Marauder_FogwallZone);

    // Enter Boss Room (Client)
    InitializeCommonEvent(20005801, flag_Marauder_Defeated, obj_Marauder_Fogwall, trigger_Marauder_FogwallZone, flag_Marauder_InBattle, param_Marauder_ActionButton, flag_Marauder_ClientEnter);

    // Boss Sound State
    InitializeCommonEvent(20001834, flag_Marauder_Defeated, flag_Marauder_InBattle, flag_Marauder_BossStart, sound_Marauder_BGM);

    // Toggle Fogwall State
    InitializeCommonEvent(20005822, flag_Marauder_Defeated, obj_Marauder_Fogwall, 3);

    // Enter Fogwall
    InitializeCommonEvent(20005810, flag_Marauder_Defeated, obj_Marauder_Fogwall, trigger_Marauder_FogwallZone, 10000);
});

// ----------------------------------------
// The Marauder - Invalidation
// ----------------------------------------
$Event(14005893, Restart, function() {
    const trigger_Marauder_FogwallZone = 4002821;

    const entity_PlayerPoint = 4000987;
    const entity_SpawnPoint  = 4002972;

    const flag_Marauder_Defeated   = 14000850;
    const flag_Marauder_InProgress = 14000851;

    const mapID   = 40;
    const blockID = 0;
    const ceremonyID = 0

    // End function if boss has already been defeated
    EndIf(EventFlag(flag_Marauder_Defeated));
    // End function if not started
    EndIf(!EventFlag(flag_Marauder_InProgress));

    // Warp player outside of arena if in invalidation zone
    if (EventFlag(flag_Marauder_InProgress) && InArea(10000, trigger_Marauder_FogwallZone)) {

        SetEventFlag(flag_Marauder_InProgress, OFF);
        SetPlayerRespawnPoint(entity_SpawnPoint);
        SetMapCeremony(mapID, blockID, ceremonyID);
        WaitFixedTimeFrames(1);
        SaveRequest(0);
        WaitFixedTimeFrames(1);
        WarpPlayer(mapID, blockID, entity_PlayerPoint);
    }

    // Fallback
    SetEventFlag(flag_Marauder_InProgress, OFF);

    EndEvent();
});

//----------------------------------------
// Core
// -- Initialization commands go here.
//----------------------------------------
$Event(14007000, Default, function() {
    //# Game Configuration
    InitializeEvent(0, 14007100, 0);
    InitializeEvent(0, 14007101, 0);
    
    //# Bonfires
    InitializeEvent(0, 14007010, 0); 
    
    //# Treasure
    InitializeEvent(0, 14007011, 0); 
    
    //# Mimics
    InitializeEvent(0, 14007012, 0);
    
    //# Scripted Treasure
    InitializeEvent(0, 14007013, 0); 
    
    //# Scripted Enemies
    InitializeEvent(0, 14007014, 0);
    
    //# Interactables
    InitializeEvent(0, 14007015, 0);
    
    //# Friendly Characters
    InitializeEvent(0, 14007050, 0);
    
    //# Intruders
    InitializeEvent(0, 14007051, 0);
    
    //# Summons
    InitializeEvent(0, 14007052, 0); 
    
    //# Conjurations
    InitializeEvent(0, 14007053, 0);
    
    //# Bosses
    InitializeEvent(0, 14007060, 0);
    
    //# Gauntlet
    InitializeEvent(0, 14007070, 0);
    
    //# Traning System
    InitializeEvent(0, 14007080, 0);
    
    //# Lights
    InitializeEvent(0, 14007200, 0);
});

//----------------------------------------
// Bonfires
// -- Bonfire commands go here.
//----------------------------------------
$Event(14007010, Default, function() {
    RegisterBonfire(14000000, 4001950, 5, 180, 0); // Firelink Shrine
    RegisterBonfire(14000003, 4001953, 5, 180, 0); // Untended Graves

    // Champion Gundyr: skip if Gladiator journey type
    if (!CharacterHasSpEffect(10000, 200104000, ComparisonType.Equal, 1)) {
        InitializeCommonEvent(20005500, 14000830, 14000004, 4000954, 4001954);
    }

    // Gladiator: disable this object
    if (CharacterHasSpEffect(10000, 200104000, ComparisonType.Equal, 1)) {
        DeactivateObject(4001954, Disabled);
    }

    // Corrupted Gundyr: skip if Gladiator journey type
    if (!CharacterHasSpEffect(10000, 200104000, ComparisonType.Equal, 1)) {
        InitializeCommonEvent(20005500, 14000800, 14000002, 4000952, 4001952);
    }

    // Gladiator: disable this object
    if (CharacterHasSpEffect(10000, 200104000, ComparisonType.Equal, 1)) {
        DeactivateObject(4001952, Disabled);
    }
});

//----------------------------------------
// Treasure
// -- Basic treasure commands go here.
//----------------------------------------
$Event(14007011, Default, function() {
    
    // Chests - Cemetery of Ash
    InitializeCommonEvent(20005520, 14000600, 4001600, 4004600, $LAYERS(0));
    InitializeCommonEvent(20005520, 14000601, 4001601, 4004601, $LAYERS(0));
    InitializeCommonEvent(20005520, 14000602, 4001602, 4004602, $LAYERS(0));
    InitializeCommonEvent(20005520, 14000603, 4001603, 4004603, $LAYERS(0));
    InitializeCommonEvent(20005520, 14000604, 4001604, 4004604, $LAYERS(0));
    InitializeCommonEvent(20005520, 14000605, 4001605, 4004605, $LAYERS(0));
    InitializeCommonEvent(20005520, 14000606, 4001606, 4004606, $LAYERS(0));
    InitializeCommonEvent(20005520, 14000607, 4001607, 4004607, $LAYERS(0));
    InitializeCommonEvent(20005520, 14000608, 4001608, 4004608, $LAYERS(0));

    // Disable the UG chest ObjAct if in COA
    if (MapCeremony(40, 0, 10)) {
        SetObjactState(4001600, -1, Disabled);
        SetObjactState(4001601, -1, Disabled);
        SetObjactState(4001602, -1, Disabled);
        SetObjactState(4001603, -1, Disabled);
        SetObjactState(4001604, -1, Disabled);
        SetObjactState(4001605, -1, Disabled);
        SetObjactState(4001606, -1, Disabled);
        SetObjactState(4001607, -1, Disabled);
        SetObjactState(4001608, -1, Disabled);
    }
    
    // Chests - Untended Graves
    InitializeCommonEvent(20005520, 14000610, 4001610, 4004610, $LAYERS(1));
    InitializeCommonEvent(20005520, 14000611, 4001611, 4004611, $LAYERS(1));
    InitializeCommonEvent(20005520, 14000612, 4001612, 4004612, $LAYERS(1));
    InitializeCommonEvent(20005520, 14000613, 4001613, 4004613, $LAYERS(1));
    InitializeCommonEvent(20005520, 14000614, 4001614, 4004614, $LAYERS(1));
    InitializeCommonEvent(20005520, 14000615, 4001615, 4004615, $LAYERS(1));
    InitializeCommonEvent(20005520, 14000616, 4001616, 4004616, $LAYERS(1));

    // Disable the COA chest ObjAct if in UG
    if (!MapCeremony(40, 0, 10)) {
        SetObjactState(4001610, -1, Disabled);
        SetObjactState(4001611, -1, Disabled);
        SetObjactState(4001612, -1, Disabled);
        SetObjactState(4001613, -1, Disabled);
        SetObjactState(4001614, -1, Disabled);
        SetObjactState(4001615, -1, Disabled);
        SetObjactState(4001616, -1, Disabled);
    }
});


//----------------------------------------
// Mimics
// -- Mimic commands go here.
//----------------------------------------
$Event(14007012, Default, function() {
    
});


//----------------------------------------
// Scripted Treasure
// -- Complex treasure commands go here.
//----------------------------------------
$Event(14007013, Default, function() {
    
    // One-time Loot
    InitializeCommonEvent(20005351, 4000860, 4002000, 54002000, 1); // Black Knight Greatsword
    InitializeCommonEvent(20005351, 4000865, 4002010, 54002010, 1); // El Hueso's Loot
    
    // Fallen Knights
    InitializeEvent(0, 14000130, 4001200, 4000800, 54000800, $LAYERS(0)); // COA
    InitializeEvent(1, 14000130, 4001201, 4000810, 54000810, $LAYERS(0)); // COA
    InitializeEvent(2, 14000130, 4001202, 4000820, 54000820, $LAYERS(0)); // COA
    InitializeEvent(3, 14000130, 4001203, 4000840, 54000840, $LAYERS(0)); // COA
    InitializeEvent(4, 14000130, 4001204, 4000920, 54000920, $LAYERS(1)); // UG
    
    // FFX Treasure - Andre - Untended Graves
    InitializeCommonEvent(20005525, 54000900, 4000900, 4001728, 62, $LAYERS(1));

    // FFX Treasure - Hawkwood - Questline
    InitializeCommonEvent(20005526, 54000830, 4000830, 4001221, 62, 13300800, $LAYERS(1));

    // FFX Treasure - Untended Graves Bonfire
    InitializeCommonEvent(20005525, 54000910, 4000910, 4001222, 62, $LAYERS(1));

    // FFX Treasure - Sirris - Questline
    InitializeCommonEvent(20006030, 4001780, 4000, 1, 60810, 50006081, 50006081, 74000790, $LAYERS(0));

    // FFX Treasure - Yuria - Questline
    InitializeCommonEvent(20006030, 4001750, 4000, 3, 60410, 50006041, 50006042, 1045, $LAYERS(0));

    // FFX Treasure - Way of White Circlet
    InitializeEvent(0, 14005461, 0, $LAYERS(0));

    // FFX Treasure - Unbreakable Patches - Questline
    InitializeCommonEvent(20006032, 4000791, 4001790, $LAYERS(0));

    // Sword Master - Show Treasure if Killed but Treasure missed
    InitializeCommonEvent(20005342, 9500, 4000500);
    
    // FFX Treasure - Gladiator Mode/NG+X
    InitializeCommonEvent(20006033, 4001770, 4000, 1, 800002010, 54003000);
    InitializeCommonEvent(20006033, 4001771, 4000, 1, 800002020, 54003001);
    InitializeCommonEvent(20006033, 4001772, 4000, 1, 800002030, 54003002);
    InitializeCommonEvent(20006033, 4001773, 4000, 1, 800002040, 54003003);
    InitializeCommonEvent(20006033, 4001774, 4000, 1, 800002050, 54003004);
});


//----------------------------------------
// Scripted Enemies
// -- Commands involving enemy appearance go here.
//----------------------------------------
$Event(14007014, Default, function() {
    
    // One-Time Enemies
    InitializeCommonEvent(20005200, 4000404, 700, 1700, 4002880); // Ravenous Crystal Lizard
    InitializeCommonEvent(20008150, 14000390, 4000390); // Crystal Lizard
    
    // Disable Black Knight in starting cell until setup is complete and map is reloaded
    if (!EventFlag(25000100)) {
        ChangeCharacterEnableState(4000860, Disabled);
        SetCharacterAnimationState(4000860, Disabled);
        SetCharacterAIState(4000860, Disabled);
    }
});


//----------------------------------------
// Interactables
// -- Commands dealing with environmental hazards and interactables go here.
//----------------------------------------
$Event(14007015, Default, function() {
    
    // Illusory Walls
    InitializeCommonEvent(20005650, 14000430, 4001430);
    InitializeCommonEvent(20005650, 14000431, 4001431);
    InitializeCommonEvent(20005650, 14000432, 4001432);
    InitializeCommonEvent(20005650, 14000433, 4001433);
    InitializeCommonEvent(20005650, 14000434, 4001434);
    InitializeCommonEvent(20005650, 14000435, 4001435);
    
    // Secret Warp
    InitializeEvent(0, 14005800, 0, $LAYERS(0));
    InitializeEvent(0, 14005801, 0, $LAYERS(0));

    // Secret Path
    InitializeEvent(0, 14005810, 0, $LAYERS(0));
    InitializeEvent(0, 14005811, 0, $LAYERS(1));

    // Secret Message
    InitializeEvent(0, 14005820, 0, $LAYERS(0));

    // Pot King Greg's Door
    InitializeEvent(0, 14005825, 0, $LAYERS(1));

    // Untended Graves
    InitializeEvent(0, 14000200, 0, $LAYERS(0));

    // Firekeeper Jail
    InitializeEvent(0, 14000056, 0);

    // Starting Cell Door
    InitializeEvent(0, 14005826, 0);
    
    // Advance Journey (NG+)
    InitializeEvent(0, 14005480, 74000012); 
    
    // Forgotten Colosseum
    InitializeCommonEvent(20008231, 4001210, 30006, 41, 4100963, 91040, 4102963);
});

//----------------------------------------
// Friendly Characters
// -- Commands involving friendly characters go here. 
//----------------------------------------
$Event(14007050, Default, function() {
    
    // Oathkeeper Xavius - Gauntlet Mode only
    InitializeCommonEvent(20081200, 14000795, 4000795, 90740); // Oathkeeper Xavius - Idle
    InitializeCommonEvent(20081210, 14000795, 4000795); // Oathkeeper Xavius - Hostility

    // Enable in Gladiator mode or in NG+1 and above
    if (CharacterHasSpEffect(10000, 200104000, ComparisonType.Equal, 1) 
    || EventFlag(51) || EventFlag(52) || EventFlag(53) || EventFlag(54) || EventFlag(55) || EventFlag(56) || EventFlag(57) || EventFlag(58) ) 
    {
        DeactivateObject(4001720, Enabled);
        ChangeCharacterEnableState(4000795, Enabled);
        SetCharacterAnimationState(4000795, Enabled);
        SetCharacterAIState(4000795, Enabled);
    }
    else
    {
        DeactivateObject(4001720, Disabled);
        ChangeCharacterEnableState(4000795, Disabled);
        SetCharacterAnimationState(4000795, Disabled);
        SetCharacterAIState(4000795, Disabled);
    }
    
    // Spurned Shade
    InitializeCommonEvent(20081200, 14000896, 4000896, 90780); // Spurned Shade - Idle
    InitializeCommonEvent(20081210, 14000896, 4000896); // Spurned Shade - Hostility
    InitializeEvent(0, 14000064, 4000896); // Appearance

    // Astrologer Lillian
    InitializeCommonEvent(20081200, 14000742, 4000742, 90850); // Astrologer Lillian - Idle
    InitializeCommonEvent(20081210, 14000742, 4000742); // Astrologer Lillian - Hostility

    // Magnum Ursus
    InitializeCommonEvent(20081200, 14000743, 4000743, 90780); // Magnum Ursus - Idle
    InitializeCommonEvent(20081210, 14000743, 4000743); // Magnum Ursus - Hostility

    // Enchanter Jiji
    InitializeCommonEvent(20081200, 14000744, 4000744, 90850); // Enchanter Jiji - Idle
    InitializeCommonEvent(20081210, 14000744, 4000744); // Enchanter Jiji - Hostility

    // Remy the Rat
    InitializeCommonEvent(20081200, 14000746, 4000746, 20); // Remy the Rat - Idle
    InitializeCommonEvent(20081210, 14000746, 4000746); // Remy the Rat  - Hostility

    InitializeEvent(0, 14000063, 4000746, 4000749); // Remy Talk Toggle

    // Occultist Grudore
    InitializeCommonEvent(20081200, 14000757, 4000757, 90430); // Occultist Grudore - Idle
    InitializeCommonEvent(20081210, 14000757, 4000757); // Occultist Grudore - Hostility

    // Master Benjin
    InitializeCommonEvent(20081200, 14000758, 4000758, 90850); // Master Benjin - Idle
    InitializeCommonEvent(20081210, 14000758, 4000758); // Master Benjin - Hostility
    InitializeCommonEvent(20081230, 14000758, 4000758, 25009541); // Master Benjin - Appearance
    
    DeactivateObject(4005730, Disabled);
    
    if(EventFlag(25009541))
    {
        DeactivateObject(4005730, Enabled);
    }
        
    // Domhnall of Zena
    InitializeCommonEvent(20081200, 14000662, 4000662, 90850); // Domhnall of Zena - Idle
    InitializeCommonEvent(20081210, 14000662, 4000662); // Domhnall of Zena - Hostility

    // Priestess Emilia
    InitializeCommonEvent(20081200, 14000660, 4000660, 90850); // Priestess Emilia - Idle
    InitializeCommonEvent(20081210, 14000660, 4000660); // Priestess Emilia - Hostility
    
    // Disable until the Emma gift interaction has occured
    if (!EventFlag(25009720)) {
        ChangeCharacterEnableState(4000660, Disabled);
        SetCharacterAnimationState(4000660, Disabled);
        SetCharacterAIState(4000660, Disabled);
    }

    // Knight Lun
    InitializeCommonEvent(20081200, 14000661, 4000661, 90780); // Horace (Blue Sentinels) - Idle
    InitializeCommonEvent(20081210, 14000661, 4000661); // Horace (Blue Sentinels) - Hostility

    // Disable until the Horace Gift interaction has occured
    if (!EventFlag(25009730)) {
        ChangeCharacterEnableState(4000661, Disabled);
        SetCharacterAnimationState(4000661, Disabled);
        SetCharacterAIState(4000661, Disabled);
    }

    // Ritualist Ellie
    InitializeCommonEvent(20081200, 14000747, 4000747, 90720); // Ritualist Ellie - Idle
    InitializeCommonEvent(20081210, 14000747, 4000747); // Ritualist Ellie - Hostility

    // Ellie's Pet Lizard
    SetCharacterAIState(4000748, Disabled);
    InitializeEvent(0, 14000062, 14000747, 4000747, 4000748); // Pet Hostility

    SetCharacterAIState(4000796, Disabled);
    InitializeEvent(0, 14000062, 14000747, 4000747, 4000796); // Pet Hostility
});

//----------------------------------------
// Intruders
// -- Commands involving hostile intruder characters go here. 
//----------------------------------------
$Event(14007051, Default, function() {
    
    // Daughter of Crystal Kriemhild
    InitializeCommonEvent(20090012, 4000197, 4002198, 30310, 63010, 58120, 99005720, 99005721, 14000197, 131001, 700000); // Setup
    InitializeCommonEvent(20090020, 4000197, 80300); // Kill Taunt

    // Blacksmith's Nightmare
    InitializeCommonEvent(20090012, 4000890, 4002890, 30310, 63010, 14700, 99005500, 99005501, 14000890, 131002, 204000); // Setup
    InitializeCommonEvent(20090020, 4000890, 84200); // Kill Taunt

    // Ashen Keeper Sofija
    InitializeCommonEvent(20090012, 4000892, 4002892, 30310, 63010, 15400, 99005570, 99005571, 14000892, 131003, 204007); // Setup
    InitializeCommonEvent(20090020, 4000892, 84200); // Kill Taunt

    // Pot King Greg
    InitializeCommonEvent(20090010, 4000893, 4002893, 30310, 63010, 15800, 99005670, 99005671, 14000893, 131004, 204014); // Setup
    InitializeCommonEvent(20090020, 4000893, 84200); // Kill Taunt
});

//----------------------------------------
// Summons
// -- Commands involving friendly summonable characters go here. 
//----------------------------------------
$Event(14007052, Default, function() {
    
    // Sword Master
    ChangeCharacterEnableState(4000190, Disabled);
    SetCharacterAnimationState(4000190, Disabled);
    SetCharacterAIState(4000190, Disabled);

    // Skip if in Cemetery of Ash
    if (!MapCeremony(40, 0, 0)) {

        InitializeCommonEvent(20090100, 4002190, 14000190, -1, 60002); // Interaction State
        InitializeCommonEvent(20090101, 4000190, 14000190, 99071210, -1); // Character State
        InitializeCommonEvent(20090102, 14000190, 14000832, 4000190, 4002113); // Boss Warp - Champion Gundyr
        InitializeCommonEvent(20090103, 14000190, 4000190, 4002840, 4002841); // Collision Transition Warp 1
        InitializeCommonEvent(20090103, 14000190, 4000190, 4002842, 4002843); // Collision Transition Warp 2
        InitializeCommonEvent(20090103, 14000190, 4000190, 4002844, 4002845); // Collision Transition Warp 3
        InitializeCommonEvent(20090103, 14000190, 4000190, 4002846, 4002847); // Collision Transition Warp 4
        InitializeCommonEvent(20090103, 14000190, 4000190, 4002848, 4002849); // Collision Transition Warp 5
        InitializeCommonEvent(20090103, 14000190, 4000190, 4002850, 4002851); // Collision Transition Warp 6
    }

L0:

    // Sellsword Luet
    ChangeCharacterEnableState(4000960, Disabled);
    SetCharacterAnimationState(4000960, Disabled);
    SetCharacterAIState(4000960, Disabled);

    // Skip if in Untended Graves
    if (!MapCeremony(40, 0, 10)) {

        InitializeCommonEvent(20090100, 4002960, 14000960, -1, 60000); // Interaction State
        InitializeCommonEvent(20090101, 4000960, 14000960, 99071010, 160737100); // Character State
        InitializeCommonEvent(20090102, 14000960, 14000801, 4000960, 4002111); // Boss Warp - Corrupted Gundyr
        InitializeCommonEvent(20090102, 14000960, 14000851, 4000960, 4002112); // Boss Warp - Marauder
        InitializeCommonEvent(20090103, 14000960, 4000960, 4002840, 4002841); // Collision Transition Warp 1
        InitializeCommonEvent(20090103, 14000960, 4000960, 4002842, 4002843); // Collision Transition Warp 2
        InitializeCommonEvent(20090103, 14000960, 4000960, 4002844, 4002845); // Collision Transition Warp 3
        InitializeCommonEvent(20090103, 14000960, 4000960, 4002846, 4002847); // Collision Transition Warp 4
        InitializeCommonEvent(20090103, 14000960, 4000960, 4002848, 4002849); // Collision Transition Warp 5
        InitializeCommonEvent(20090103, 14000960, 4000960, 4002850, 4002851); // Collision Transition Warp 6
    }

L1:
    NoOp();
});

//----------------------------------------
// Conjurations
// -- Commands involving conjurations go here. 
//----------------------------------------
$Event(14007053, Default, function() {
    
    // Skeleton
    InitializeCommonEvent(20080000, 4000990); // Setup
    InitializeCommonEvent(20080001, 4000990); // Bonfire Rest
    InitializeCommonEvent(20080002, 4000990); // Spell Effects
    InitializeCommonEvent(20080003, 4000990); // Item Effects
    InitializeCommonEvent(20080004, 4000990, 160760000, 160760200, 40, 0); // Summoning

    // Hollow
    InitializeCommonEvent(20080000, 4000991); // Setup
    InitializeCommonEvent(20080001, 4000991); // Bonfire Rest
    InitializeCommonEvent(20080002, 4000991); // Spell Effects
    InitializeCommonEvent(20080003, 4000991); // Item Effects
    InitializeCommonEvent(20080004, 4000991, 160760001, 160760200, 40, 0); // Summoning

    // Hound
    InitializeCommonEvent(20080000, 4000992); // Setup
    InitializeCommonEvent(20080001, 4000992); // Bonfire Rest
    InitializeCommonEvent(20080002, 4000992); // Spell Effects
    InitializeCommonEvent(20080003, 4000992); // Item Effects
    InitializeCommonEvent(20080004, 4000992, 160760002, 160760200, 40, 0); // Summoning

    // Carthus Warrior
    InitializeCommonEvent(20080000, 4000993); // Setup
    InitializeCommonEvent(20080001, 4000993); // Bonfire Rest
    InitializeCommonEvent(20080002, 4000993); // Spell Effects
    InitializeCommonEvent(20080003, 4000993); // Item Effects
    InitializeCommonEvent(20080004, 4000993, 160760003, 160760200, 40, 0); // Summoning

    // Lothric Knight
    InitializeCommonEvent(20080000, 4000994); // Setup
    InitializeCommonEvent(20080001, 4000994); // Bonfire Rest
    InitializeCommonEvent(20080002, 4000994); // Spell Effects
    InitializeCommonEvent(20080003, 4000994); // Item Effects
    InitializeCommonEvent(20080004, 4000994, 160760004, 160760200, 40, 0); // Summoning

    // Lycanthrope
    InitializeCommonEvent(20080000, 4000995); // Setup
    InitializeCommonEvent(20080001, 4000995); // Bonfire Rest
    InitializeCommonEvent(20080002, 4000995); // Spell Effects
    InitializeCommonEvent(20080003, 4000995); // Item Effects
    InitializeCommonEvent(20080004, 4000995, 160760005, 160760200, 40, 0); // Summoning

    // Black Knight
    InitializeCommonEvent(20080000, 4000996); // Setup
    InitializeCommonEvent(20080001, 4000996); // Bonfire Rest
    InitializeCommonEvent(20080002, 4000996); // Spell Effects
    InitializeCommonEvent(20080003, 4000996); // Item Effects
    InitializeCommonEvent(20080004, 4000996, 160760006, 160760200, 40, 0); // Summoning

    // Abyss Watcher
    InitializeCommonEvent(20080000, 4000997); // Setup
    InitializeCommonEvent(20080001, 4000997); // Bonfire Rest
    InitializeCommonEvent(20080002, 4000997); // Spell Effects
    InitializeCommonEvent(20080003, 4000997); // Item Effects
    InitializeCommonEvent(20080004, 4000997, 160760007, 160760200, 40, 0); // Summoning

    // Stone Gargoyle
    InitializeCommonEvent(20080000, 4000998); // Setup
    InitializeCommonEvent(20080001, 4000998); // Bonfire Rest
    InitializeCommonEvent(20080002, 4000998); // Spell Effects
    InitializeCommonEvent(20080003, 4000998); // Item Effects
    InitializeCommonEvent(20080004, 4000998, 160760008, 160760200, 40, 0); // Summoning

    // Skeleton Unique
    InitializeCommonEvent(20080010, 4000990);
    InitializeCommonEvent(20080011, 4000990);
    InitializeCommonEvent(20080012, 4000990);

    // Hollow Unique
    InitializeCommonEvent(20080020, 4000991);
    InitializeCommonEvent(20080021, 4000991);
    InitializeCommonEvent(20080022, 4000991);

    // Hound Unique
    InitializeCommonEvent(20080030, 4000992);
    InitializeCommonEvent(20080031, 4000992);
    InitializeCommonEvent(20080032, 4000992);

    // Warrior Unique
    InitializeCommonEvent(20080040, 4000993);
    InitializeCommonEvent(20080041, 4000993);
    InitializeCommonEvent(20080042, 4000993);

    // Lothric Knight Unique
    InitializeCommonEvent(20080050, 4000994);
    InitializeCommonEvent(20080051, 4000994);
    InitializeCommonEvent(20080052, 4000994);

    // Lycanthrope Unique
    InitializeCommonEvent(20080060, 4000995);
    InitializeCommonEvent(20080061, 4000995);
    InitializeCommonEvent(20080062, 4000995);

    // Black Knight Unique
    InitializeCommonEvent(20080070, 4000996);
    InitializeCommonEvent(20080071, 4000996);
    InitializeCommonEvent(20080072, 4000996);

    // Abyss Watcher Unique
    InitializeCommonEvent(20080080, 4000997);
    InitializeCommonEvent(20080081, 4000997);
    InitializeCommonEvent(20080082, 4000997);

    // Gargoyle Unique
    InitializeCommonEvent(20080090, 4000998);
    InitializeCommonEvent(20080091, 4000998);
    InitializeCommonEvent(20080092, 4000998);
});

//----------------------------------------
// Bosses
// -- Commands that deal with new Bosses go here.
//----------------------------------------
$Event(14007060, Default, function() {

    // The Marauder
    InitializeEvent(0, 14005890, 0); // Setup
    InitializeEvent(0, 14005891, 0); // Kill
    InitializeEvent(0, 14005892, 0); // Fogwalls
    InitializeEvent(0, 14005893, 0); // Invalidation
    
    InitializeEvent(0, 14005822, 0); // Abyss: Access
    InitializeEvent(0, 14005823, 0); // Abyss: Walls
});

//----------------------------------------
// Gauntlet
// -- Commands that deal with the Gauntlet journey type go here.
//----------------------------------------
$Event(14007070, Default, function() {
    
    // Gauntlet Mode
    InitializeCommonEvent(20090800, 4002050);
    InitializeCommonEvent(20090800, 4002051);
    InitializeCommonEvent(20090800, 4002052);
    InitializeCommonEvent(20090810, 4001830, 4001831, 4001832, 4001833); // Gauntlet fogwalls
});

//----------------------------------------
// Training System
// -- Commands that deal with the training system go here.
//----------------------------------------
$Event(14007080, Default, function() {

    // Bone Collector
    InitializeCommonEvent(20081200, 14000897, 4000897, 90780); // Idle
    InitializeCommonEvent(20081210, 14000897, 4000897); // Hostility
    InitializeEvent(0, 14000075, 4000897, 4002380, 4002381); // Training NPC
    InitializeEvent(0, 14000076, 0); // Reset flags

    // Training Dummies
    InitializeEvent(0, 14000070, 4000865, 4002370, 4002373, 25009790); // Dummy 1
    InitializeEvent(1, 14000070, 4000866, 4002371, 4002374, 25009791); // Dummy 2
    InitializeEvent(0, 14000071, 4000867, 4002372, 4002375, 25009792); // Dummy 3
    InitializeEvent(0, 14000077, 4000865); // El Hueso fight
});

//----------------------------------------
// Misc
// -- Niche events go here.
//----------------------------------------
// Game Configuration
$Event(14007100, Restart, function() {
    if (!EventFlag(25000100)) {
        SetEventFlag(25000101, ON); // Journey Type: Hollow
    }

    // Remove talk entity once Journey is configured
    WaitFor(EventFlag(25000100));

    ChangeCharacterEnableState(4000855, Disabled);
});

// Game Configuration - Fallback 
$Event(14007101, Restart, function() {
    // If in Firelink and configuration hasn't been set (old save)
    WaitFor(!EventFlag(25000100) && InArea(10000, 4002940));

    // Set configuration to Standard mode
    SetEventFlag(25009800, ON);
    SetEventFlag(25000100, ON);
    SetEventFlag(25000101, ON);
});

// Ceremony
$Event(14007200, Restart, function() {
    DeleteObjectfollowingSFX(4001575, false);
    DeleteObjectfollowingSFX(4001576, false);
    DeleteObjectfollowingSFX(4001577, false);
    CreateObjectfollowingSFX(4001575, 210, 838041);
    CreateObjectfollowingSFX(4001576, 210, 838041);
    CreateObjectfollowingSFX(4001577, 210, 838041);
});
