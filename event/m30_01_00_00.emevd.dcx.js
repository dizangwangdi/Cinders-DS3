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
    InitializeEvent(0, 13017000, 0);

    InitializeEvent(0, 13015470, 0);
    
    InitializeCommonEvent(20005780, 3011750, 3);
    InitializeCommonEvent(20005780, 3011751, 3);
    InitializeCommonEvent(20005780, 3011753, 3);
    InitializeCommonEvent(20005110, 3010350, 3012380);
    InitializeCommonEvent(20005132, 3010413, 1084227584, 3012460); // Lothric Knight - Wakeup
    InitializeCommonEvent(20005201, 3010414, 700, 1700, 3012480, 0); // Lothric Knight - Wakeup with anim
    InitializeCommonEvent(20005201, 3010415, 700, 1700, 3012480, 1053609165); // Lothric Knight - Wakeup with anim
    InitializeCommonEvent(20005210, 3010417, 700, 1700, 1102053376); // Lothric Knight - Wakeup with anim
    InitializeCommonEvent(20005110, 3010418, 3012380); // Lothric Knight - Wakeup
    InitializeCommonEvent(20005210, 3010420, 700, 1700, 1077936128); // Lothric Knight - Wakeup with anim
    InitializeCommonEvent(20005110, 3010430, 3012340); // Large Hollow Soldier - Wakeup
    InitializeCommonEvent(20005330, 3010431, 3012450, 13015231); // Large Hollow Soldier - Wakup and run
    InitializeCommonEvent(20005110, 3010450, 3012604); // Winged Knight - Wakeup
    InitializeCommonEvent(20005111, 3010451, 3010, 3012605); // Winged Knight - Wakeup
    InitializeEvent(0, 13015310, 3010460, 706, 1706); // Lothric Priest - Wakeup
    InitializeCommonEvent(20005110, 3010500, 3012600);
    InitializeCommonEvent(20005215, 3010501, 710, 1710, 1084227584, 1061997773);
    InitializeCommonEvent(20005215, 3010502, 710, 1710, 1084227584, 1067030938);
    InitializeCommonEvent(20005220, 3010504, 706, 1706);
    InitializeCommonEvent(20005220, 3010506, 706, 1706);
    InitializeCommonEvent(20005202, 3010507, 710, 1710, 3012530);
    InitializeCommonEvent(20005110, 3010508, 3012600);
    InitializeCommonEvent(20005202, 3010512, 710, 1710, 3012531); // Hollow Soldier - Hang wakeup
    InitializeCommonEvent(20005200, 3010520, 706, 1706, 3012435);
    InitializeCommonEvent(20005201, 3010521, 706, 1706, 3012435, 1056964608);
    InitializeCommonEvent(20005215, 3010538, 710, 1710, 1084227584, 1060320051);
    InitializeCommonEvent(20005200, 3010539, 703, 1703, 3012600);
    InitializeCommonEvent(20005220, 3010549, 705, 1705);
    InitializeCommonEvent(20005110, 3010551, 3012430);
    InitializeCommonEvent(20005119, 3010557, 3012338, 3012339, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005119, 3010558, 3012338, 3012339, 0, 0, 0, 0, 0);
    InitializeCommonEvent(20005110, 3010562, 3012335);
    InitializeCommonEvent(20005110, 3010563, 3012440);
    InitializeCommonEvent(20005110, 3010564, 3012440);
    InitializeCommonEvent(20005110, 3010565, 3012335);
    InitializeCommonEvent(20005110, 3010566, 3012440);
    InitializeCommonEvent(20005202, 3010567, 710, 1710, 3012530);
    InitializeCommonEvent(20005110, 3010568, 3012600);
    InitializeCommonEvent(20005202, 3010572, 710, 1710, 3012530);
    InitializeCommonEvent(20005220, 3010573, 703, 1703);
    InitializeCommonEvent(20005220, 3010574, 706, 1706);
    InitializeEvent(0, 13015230, 0);
    InitializeCommonEvent(20005110, 3010610, 3012490);


    InitializeEvent(0, 13015550, 3010830); // Corrupted Wyvern (Left)
    InitializeEvent(0, 13015551, 3010831); // Corrupted Wyvern (Right)
    InitializeEvent(0, 13015555, 0); // Corrupted Wyvern - Pus of Man State
    InitializeEvent(0, 13015590, 13010890, 3010830, 20); // Corrupted Wyvern (Left) - Flag Toggle
    InitializeEvent(1, 13015590, 13010891, 3010831, 30); // Corrupted Wyvern (Right) - Flag Toggle
    InitializeEvent(0, 13015556, 3010835, 13010895, 13010890, 13015550); // Corrupted Wyvern (Left) - Treasure
    InitializeEvent(0, 13015557, 3010836, 13010896, 13010891); // Corrupted Wyvern (Right) - Treasure
    InitializeEvent(0, 13015558, 3010835, 3010830, 13010895, 40); // Corrupted Wyvern (Left) - Warp
    InitializeEvent(0, 13015559, 3010836, 3010831, 13010896, 41); // Corrupted Wyvern (Right) - Warp
    InitializeEvent(0, 13015580, 0); // Corrupted Wyvern (Left) - Set Effect on Wakeup
    InitializeEvent(0, 13015581, 0); // Corrupted Wyvern (Left) - Set Effect on Wakeup
    InitializeEvent(0, 13015585, 0); // Corrupted Wyvern (Right) - Set Effect on Wakeup
    InitializeCommonEvent(20005410, 3010551, 3005);
    InitializeCommonEvent(20005411, 3010551, 3010555, 703, 1703, 1053609165);
    InitializeCommonEvent(20005411, 3010551, 3010556, 705, 1705, 1061997773);
    InitializeCommonEvent(20005411, 3010551, 3010560, 703, 1703, 1063675494);
    InitializeCommonEvent(20005411, 3010551, 3010561, 703, 1703, 1065353216);
    InitializeCommonEvent(20005415, 13011500, 3010500, 3010600, 706, 1706, 0, 13015501, 13015502); // Pus of Man Setup
    InitializeCommonEvent(20005415, 13011510, 3010539, 3010602, 703, 1703, 0, 13015503, 13015504); // Pus of Man Setup
    InitializeCommonEvent(20005415, 13011520, 3010568, 3010604, 703, 1703, 0, 13015505, 13015506); // Pus of Man Setup

    InitializeCommonEvent(20005530, 13015400, 3011300);
    InitializeCommonEvent(20005530, 13015401, 3011301);
    InitializeCommonEvent(20005530, 13015402, 3011302);
    InitializeCommonEvent(20005530, 13015403, 3011303);
    InitializeCommonEvent(20005530, 13015404, 3011304);
    InitializeCommonEvent(20005530, 13015405, 3011305);
    InitializeCommonEvent(20005530, 13015406, 3011306);
    InitializeCommonEvent(20005530, 13015407, 3011307);
    InitializeCommonEvent(20005530, 13015408, 3011308);
    InitializeCommonEvent(20005530, 13015409, 3011309);
    InitializeCommonEvent(20005530, 13015410, 3011310);
    InitializeCommonEvent(20005530, 13015411, 3011311);
    InitializeCommonEvent(20005530, 13015412, 3011312);
    InitializeCommonEvent(20005530, 13015413, 3011313);
    InitializeCommonEvent(20005530, 13015414, 3011314);
    InitializeCommonEvent(20005530, 13015415, 3011315);
    InitializeCommonEvent(20005530, 13015416, 3011316);
    InitializeCommonEvent(20005530, 13015417, 3011317);
    InitializeCommonEvent(20005530, 13015418, 3011318);
    InitializeCommonEvent(20005530, 13015419, 3011319);
    InitializeCommonEvent(20005530, 13015420, 3011320);
    InitializeCommonEvent(20005530, 13015421, 3011321);
    InitializeCommonEvent(20005530, 13015422, 3011322);
    InitializeCommonEvent(20005530, 13015423, 3011323);
    InitializeCommonEvent(20005530, 13015424, 3011324);
    InitializeCommonEvent(20005530, 13015425, 3011325);
    InitializeCommonEvent(20005530, 13015426, 3011326);
    InitializeCommonEvent(20005530, 13015427, 3011327);
    InitializeCommonEvent(20005530, 13015428, 3011328);
    InitializeCommonEvent(20005530, 13015429, 3011329);
    InitializeCommonEvent(20005530, 13015430, 3011330);
    InitializeCommonEvent(20005530, 13015431, 3011331);
    InitializeCommonEvent(20005650, 13010310, 3011390);
    InitializeCommonEvent(20005622, 13010450, 13010452, 3011400, 3011401, 3011402, 13011450);
    InitializeCommonEvent(20005628, 13010451, 3011402, 3012401);
    InitializeCommonEvent(20005620, 13010460, 13010462, 3011410, 3011411, 3011412, 13011460);
    InitializeCommonEvent(20005628, 13010461, 3011412, 3012411);
    InitializeEvent(0, 13015225, 0);
    InitializeEvent(0, 13014522, 0);
    SetObjectInvulnerability(3011500, Enabled);
    SetObjectInvulnerability(3011501, Enabled);
    InitializeEvent(0, 13015200, 13010300, 13010302, 3011491, 13011300);
    InitializeEvent(0, 13015202, 0);
    InitializeEvent(0, 13015210, 13010301, 3011491);
    InitializeCommonEvent(20005610, 13010550, 3012421, 3012420);
    InitializeCommonEvent(20005611, 13010550, 13011580, 3011420, 300320);
    InitializeEvent(0, 13014242, 0);
    RegisterLadder(13010670, 13010671, 3011670);
    RegisterLadder(13010672, 13010673, 3011671);
    RegisterLadder(13010674, 13010675, 3011672);
    RegisterLadder(13010676, 13010677, 3011673);

    // Sirris of the Sunless Realm
    InitializeCommonEvent(20005700, 13010800, 13014191, 13015191, 3010191, 3012705); // Summon Setup
    InitializeCommonEvent(20005710, 13014191, 13015805, 3010191, 3012801, 3012820); // Summon Boss Fog AI
    InitializeCommonEvent(20005720, 13014191, 13015191, 13010800, 3010191); // Summon Apperance

    // Eygon of Carim
    InitializeCommonEvent(20005700, 13010800, 13014192, 13015192, 3010192, 3012710); // Summon Setup
    InitializeCommonEvent(20005710, 13014192, 13015805, 3010192, 3012801, 3012820); // Summon Boss Fog AI
    InitializeCommonEvent(20005720, 13014192, 13015192, 13010800, 3010192); // Summon Apperance

    InitializeEvent(0, 13015810, 0);
    InitializeEvent(0, 13015811, 0);
    InitializeEvent(0, 13015812, 0);
    InitializeEvent(0, 13015820, 0);
    InitializeEvent(0, 13015815, 0);
    InitializeEvent(0, 13015830, 3010812, 1067030938); // Pilgrim Angel - Animation
    InitializeCommonEvent(20006010, 73010952, 69003);
    InitializeCommonEvent(20006031, 73010953, 3012750);
});

//---------------------------------------------
// Destructor
//---------------------------------------------
$Event(50, Default, function() {
    SetCharacterAnimationState(3010790, Disabled); // Altar of Sunlight
    SetCharacterGravity(3010790, Disabled); // Altar of Sunlight
    SetCharacterMaphit(3010790, true); // Altar of Sunlight
    SetMapSoundState(3012803, Disabled);
    SetMapSoundState(3012804, Disabled);
});

$Event(13014242, Restart, function() {
    EndIf(!PlayerIsNotInOwnWorld());
    if (!EventFlag(13010550)) {
        EndEvent();
    }
L0:
    ReproduceObjectAnimation(3011420, 1);
    EndEvent();
});

$Event(13014522, Restart, function() {
    InitializeCommonEvent(20005623, 13010450, 13010452, 3011400, 3011401, 3014401, 3011402, 3014402, 3012401, 3012402, 13011450, 13014450, 13010451);
    InitializeEvent(0, 13015220, 13010460, 3011410, 3011411, 3014411, 3011413, 3014413, 3011412, 3014412);
});

$Event(13015200, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (NumberOfClientsOfType(ClientType.Invader) != 0) {
        SetEventFlag(X12_4, OFF);
    }
    if (!EventFlag(X0_4)) {
        ForceAnimationPlayback(X8_4, 0, false, false, true, 0, 1);
        SetEventFlag(X4_4, OFF);
        EndEvent();
    }
L0:
    ForceAnimationPlayback(X8_4, 2, false, false, true, 0, 1);
    SetEventFlag(X4_4, ON);
    EndEvent();
});

$Event(13015201, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (!(((EventFlag(X0_4) && EventFlag(X4_4)) || (!EventFlag(X0_4) && !EventFlag(X4_4)))
        && EventFlag(X20_4))) {
        if (!EventFlag(X4_4)) {
            if (NumberOfClientsOfType(ClientType.Invader) != 0) {
                SetObjactState(X12_4, 304874, Enabled);
            }
            obj = ObjActEventFlag(X16_4);
            WaitFor(obj || EventFlag(X0_4));
            if (NumberOfClientsOfType(ClientType.Invader) != 0) {
                SetObjactState(X12_4, -1, Disabled);
            }
            if (NumberOfClientsOfType(ClientType.Invader) != 0) {
                SetNetworkconnectedEventFlag(X20_4, ON);
                SetNetworkconnectedEventFlag(X0_4, ON);
            }
            SetEventFlag(X4_4, ON);
            if (!obj.Passed) {
                GotoIf(L0, EventFlag(X24_4));
                ForceAnimationPlayback(X8_4, 1, false, true, true, 0, 1);
            } else {
L0:
                SetNetworkconnectedEventFlag(X24_4, ON);
                WaitFixedTimeSeconds(2);
                ForceAnimationPlayback(X8_4, 1, false, true, true, 0, 1);
                ForceAnimationPlayback(X12_4, 3, false, false, true, 0, 1);
                SetNetworkconnectedEventFlag(X24_4, OFF);
            }
L1:
            WaitFor(ObjectBackread(X8_4));
            if (NumberOfClientsOfType(ClientType.Invader) != 0) {
                SetNetworkconnectedEventFlag(X20_4, OFF);
            }
            RestartEvent();
        }
L2:
        if (NumberOfClientsOfType(ClientType.Invader) != 0) {
            SetObjactState(X12_4, 304874, Enabled);
        }
        obj2 = ObjActEventFlag(X16_4);
        WaitFor(obj2 || !EventFlag(X0_4));
        if (NumberOfClientsOfType(ClientType.Invader) != 0) {
            SetObjactState(X12_4, -1, Disabled);
        }
        if (NumberOfClientsOfType(ClientType.Invader) != 0) {
            SetNetworkconnectedEventFlag(X20_4, ON);
            SetNetworkconnectedEventFlag(X0_4, OFF);
        }
        SetEventFlag(X4_4, OFF);
        if (!obj2.Passed) {
            GotoIf(L3, EventFlag(X24_4));
            SetEventFlag(X28_4, ON);
            ForceAnimationPlayback(X8_4, 3, false, true, true, 0, 1);
        } else {
L3:
            SetNetworkconnectedEventFlag(X24_4, ON);
            WaitFixedTimeSeconds(2);
            SetEventFlag(X28_4, ON);
            ForceAnimationPlayback(X8_4, 3, false, true, true, 0, 1);
            ForceAnimationPlayback(X12_4, 3, false, false, true, 0, 1);
            SetNetworkconnectedEventFlag(X24_4, OFF);
        }
L4:
        WaitFor(ObjectBackread(X8_4));
        SetEventFlag(X28_4, OFF);
        if (NumberOfClientsOfType(ClientType.Invader) != 0) {
            SetNetworkconnectedEventFlag(X20_4, OFF);
        }
        RestartEvent();
    }
L9:
    WaitFor(!EventFlag(X20_4));
    RestartEvent();
});

$Event(13015202, End, function() {
    InitializeEvent(0, 13015201, 13010300, 13010302, 3011491, 3011490, 3014500, 13011300, 13014300, 13010301);
});

$Event(13015210, Restart, function(X0_4, X4_4) {
    WaitFor(EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X0_4));
    WaitFixedTimeFrames(2);
    if (EventFlag(X0_4)) {
        WaitFixedTimeSeconds(1.3);
        CreateDamagingObject(13015211, X4_4, 40, 5300, DamageTargetType.Character, 0.8, 0.5, 0);
        CreateDamagingObject(13015212, X4_4, 41, 5300, DamageTargetType.Character, 0.8, 0.5, 0);
        CreateDamagingObject(13015213, X4_4, 42, 5300, DamageTargetType.Character, 0.8, 0.5, 0);
        CreateDamagingObject(13015214, X4_4, 43, 5300, DamageTargetType.Character, 0.8, 0.5, 0);
        CreateDamagingObject(13015215, X4_4, 44, 5300, DamageTargetType.Character, 0.8, 0.5, 0);
        CreateDamagingObject(13015216, X4_4, 45, 5300, DamageTargetType.Character, 0.8, 0.5, 0);
        CreateDamagingObject(13015217, X4_4, 46, 5300, DamageTargetType.Character, 0.8, 0.5, 0);
        CreateDamagingObject(13015218, X4_4, 47, 5300, DamageTargetType.Character, 0.8, 0.5, 0);
        RestartEvent();
    }
L0:
    WaitFixedTimeSeconds(2);
    RestartEvent();
});

$Event(13015220, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(EventFlag(13010461));
    if (!EventFlag(X0_4)) {
        SetObjactState(X16_4, 304873, Enabled);
        SetObjactState(X8_4, -1, Disabled);
        SetObjactState(X24_4, -1, Disabled);
        obj = ObjActEventFlag(X20_4);
        obj2 = ObjActEventFlag(X28_4);
        WaitFor(obj || obj2 || EventFlag(X0_4) || InArea(10000, 3012411) || InArea(10000, 3012412));
        SetObjactState(X16_4, -1, Disabled);
        SetObjactState(X24_4, -1, Disabled);
        GotoIf(L0, obj.Passed);
        GotoIf(L1, obj2.Passed);
        ForceAnimationPlayback(X4_4, 21, false, true, true, 0, 1);
        Goto(L2);
L0:
        WaitFixedTimeSeconds(2);
        ForceAnimationPlayback(X4_4, 21, false, true, true, 0, 1);
        ForceAnimationPlayback(X16_4, 3, false, false, true, 0, 1);
        Goto(L2);
L1:
        WaitFixedTimeSeconds(2);
        ForceAnimationPlayback(X4_4, 21, false, true, true, 0, 1);
        ForceAnimationPlayback(X24_4, 3, false, false, true, 0, 1);
        Goto(L2);
L2:
        WaitFor(!AllPlayersInArea(3012412) && !AllPlayersInArea(3012413));
        ForceAnimationPlayback(X4_4, 110, false, true, true, 0, 1);
        ForceAnimationPlayback(X4_4, 10, false, true, true, 0, 1);
        SetEventFlag(X0_4, ON);
        SetObjactState(X8_4, -1, Enabled);
        SetObjactState(X24_4, -1, Disabled);
        RestartEvent();
    }
L3:
    SetObjactState(X8_4, 304873, Enabled);
    SetObjactState(X16_4, -1, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    obj3 = ObjActEventFlag(X12_4);
    obj4 = ObjActEventFlag(X28_4);
    WaitFor(obj3 || obj4 || !EventFlag(X0_4) || InArea(10000, 3012412) || InArea(10000, 3012413));
    SetObjactState(X8_4, -1, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    GotoIf(L4, obj3.Passed);
    GotoIf(L5, obj4.Passed);
    ForceAnimationPlayback(X4_4, 12, false, true, true, 0, 1);
    Goto(L6);
L4:
    WaitFixedTimeSeconds(2);
    ForceAnimationPlayback(X4_4, 12, false, true, true, 0, 1);
    ForceAnimationPlayback(X8_4, 3, false, false, true, 0, 1);
    Goto(L6);
L5:
    WaitFixedTimeSeconds(2);
    ForceAnimationPlayback(X4_4, 12, false, true, true, 0, 1);
    ForceAnimationPlayback(X24_4, 3, false, false, true, 0, 1);
    Goto(L6);
L6:
    WaitFor(!AllPlayersInArea(3012411) && !AllPlayersInArea(3012412));
    ForceAnimationPlayback(X4_4, 120, false, true, true, 0, 1);
    ForceAnimationPlayback(X4_4, 20, false, true, true, 0, 1);
    SetEventFlag(X0_4, OFF);
    SetObjactState(X16_4, 304873, Enabled);
    SetObjactState(X24_4, -1, Disabled);
    RestartEvent();
});

$Event(13015225, Restart, function() {
    EndIf(EventFlag(13010461));
    WaitFor(InArea(10000, 3012412) && !EventFlag(13010461));
    DisplayGenericDialog(10010170, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    WaitFor(!InArea(10000, 3012412));
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(13015230, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(
        (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.Hollow)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 3012451))
            || EventFlag(13015231));
    ClearCharactersAITarget(3010505);
    SetSpEffect(3010505, 5000);
    ChangeCharacterPatrolBehavior(3010505, 3014300);
    SetEventFlag(13015231, ON);
    WaitFor(CharacterAIState(3010505, AIStateType.Combat));
    ClearSpEffect(3010505, 5000);
});

// Lothric Priest - Wakeup on area/attack/friend kill trigger
$Event(13015310, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    ForceAnimationPlayback(X0_4, X4_4, true, false, false, 0, 1);
    WaitFor(
        (EntityInRadiusOfEntity(10000, X0_4, 3, 1)
            && CharacterBackreadStatus(X0_4)
            && CharacterHasSpEffect(X0_4, 5450)
            && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.Hollow)
                || CharacterType(10000, TargetType.WhitePhantom)))
            || CharacterDamagedBy(X0_4, 10000)
            || CharacterDead(3010418)); // Lothric Knight
    EndIf(!CharacterHasSpEffect(X0_4, 5450));
    ForceAnimationPlayback(X0_4, X8_4, false, false, false, 0, 1);
    RequestCharacterAIReplan(X0_4);
});

$Event(13015470, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(ObjectBackread(3011600));
    WaitFixedTimeFrames(5);
    ShowObjectByMapCeremony(3011600, 10, 2000);
    ShowObjectByMapCeremony(3011601, 30, 1400);
    ShowObjectByMapCeremony(3011602, 10, 790);
    ShowObjectByMapCeremony(3011605, 20, 1010);
    ShowObjectByMapCeremony(3011606, 40, 710);
    ShowObjectByMapCeremony(3011607, 20, 1400);
    ShowObjectByMapCeremony(3011610, 10, 4320);
    ShowObjectByMapCeremony(3011611, 40, 3800);
    ShowObjectByMapCeremony(3011612, 30, 4420);
    ShowObjectByMapCeremony(3011613, 40, 0);
    ShowObjectByMapCeremony(3011615, 110, 0);
    ShowObjectByMapCeremony(3011616, 110, 290);
    ShowObjectByMapCeremony(3011617, 110, 440);
    ShowObjectByMapCeremony(3011628, 110, 880);
    ShowObjectByMapCeremony(3011631, 110, 1640);
    ShowObjectByMapCeremony(3011620, 120, 470);
    ShowObjectByMapCeremony(3011621, 120, 680);
    ShowObjectByMapCeremony(3011622, 120, 920);
    ShowObjectByMapCeremony(3011629, 120, 1250);
    ShowObjectByMapCeremony(3011632, 120, 2070);
    ShowObjectByMapCeremony(3011625, 130, 1030);
    ShowObjectByMapCeremony(3011626, 130, 1280);
    ShowObjectByMapCeremony(3011627, 130, 1440);
    ShowObjectByMapCeremony(3011630, 130, 1880);
    ShowObjectByMapCeremony(3011633, 130, 2640);
    ShowObjectByMapCeremony(3011636, 10, 3100);
    ShowObjectByMapCeremony(3011637, 20, 2500);
    ShowObjectByMapCeremony(3011638, 40, 2300);
    ShowObjectByMapCeremony(3011639, 10, 2110);
    ShowObjectByMapCeremony(3011640, 20, 1920);
    ShowObjectByMapCeremony(3011641, 30, 2400);
    ShowObjectByMapCeremony(3011642, 40, 4790);
    ShowObjectByMapCeremony(3011643, 20, 4900);
    ShowObjectByMapCeremony(3011644, 30, 5490);
    ShowObjectByMapCeremony(3011645, 110, 1000);
    ShowObjectByMapCeremony(3011646, 110, 1290);
    ShowObjectByMapCeremony(3011647, 110, 1440);
    ShowObjectByMapCeremony(3011648, 110, 1880);
    ShowObjectByMapCeremony(3011649, 110, 2640);
    ShowObjectByMapCeremony(3011650, 120, 1470);
    ShowObjectByMapCeremony(3011651, 120, 1680);
    ShowObjectByMapCeremony(3011652, 120, 1920);
    ShowObjectByMapCeremony(3011653, 120, 2250);
    ShowObjectByMapCeremony(3011654, 120, 3200);
    ShowObjectByMapCeremony(3011655, 130, 2030);
    ShowObjectByMapCeremony(3011656, 130, 2280);
    ShowObjectByMapCeremony(3011657, 130, 2440);
    ShowObjectByMapCeremony(3011658, 130, 2880);
    ShowObjectByMapCeremony(3011659, 130, 3640);
    WaitFor(!ObjectBackread(3011600));
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(13015475, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFixedTimeSeconds(0.1);
    IssueShortWarpRequest(3010501, TargetEntityType.Area, 3012510, -1);
    IssueShortWarpRequest(3010502, TargetEntityType.Area, 3012511, -1);
    IssueShortWarpRequest(3010538, TargetEntityType.Area, 3012512, -1);
});

// Corrupted Wyvern (Left) - Setup
$Event(13015550, Restart, function(X0_4) {
    SetCharacterAIState(X0_4, Disabled);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    EndIf(EventFlag(13010895));
    if (!EventFlag(13010890)) {
        if (EventFlag(13010580)) {
            ChangeCharacterEnableState(X0_4, Enabled);
            SetCharacterAnimationState(X0_4, Enabled);
            SetCharacterImmortality(X0_4, Enabled);
            ForceAnimationPlayback(X0_4, 30000, true, false, false, 0, 1);
            EndEvent();
        }
L0:
        WaitFor(EventFlag(13010580));
        WaitFixedTimeSeconds(0);
        ChangeCharacterEnableState(X0_4, Enabled);
        SetCharacterAnimationState(X0_4, Enabled);
        SetCharacterImmortality(X0_4, Enabled);
        ForceAnimationPlayback(X0_4, 20006, false, true, false, 0, 1);
        EndEvent();
    }
L1:
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterImmortality(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 30002, true, false, false, 0, 1);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetLockOnPoint(X0_4, 220, Disabled);
    WaitFixedTimeFrames(1);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.Every5Frames);
});

// Corrupted Wyvern (Right) - Setup
$Event(13015551, Restart, function(X0_4) {
    SetCharacterAIState(X0_4, Disabled);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    EndIf(EventFlag(13010896));
    ChangeCharacterEnableState(X0_4, Enabled);
    if (!EventFlag(13010891)) {
        SetCharacterAnimationState(X0_4, Enabled);
    }
    SetCharacterImmortality(X0_4, Enabled);
    if (!EventFlag(13010891)) {
        if (EventFlag(13010580)) {
            ForceAnimationPlayback(X0_4, 30000, true, false, false, 0, 1);
            EndEvent();
        }
L0:
        ForceAnimationPlayback(X0_4, 30001, true, false, false, 0, 1);
        WaitFor(
            ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.Hollow))
                && InArea(10000, 3012320))
                || HasDamageType(X0_4, 10000, DamageType.Unspecified));
        ForceAnimationPlayback(X0_4, 20004, false, false, false, 0, 1);
        SetEventFlag(13010580, ON);
        SetEventFlag(9420, ON);
        EndEvent();
    }
L1:
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 30002, true, false, false, 0, 1);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetLockOnPoint(X0_4, 220, Disabled);
    WaitFixedTimeFrames(1);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.Every5Frames);
});

// Corrupted Wyvern - Control Pus of Man State
$Event(13015555, Restart, function() {
    EndIf(EventFlag(13010890));
    CreateNPCPart(3010831, 10, NPCPartType.Part3, 500, 1, 1, false, false); // Corrupted Wyvern (Right)
    WaitFor(EventFlag(13015550) && EventFlag(13015551));
    CreateNPCPart(3010830, 10, NPCPartType.Part3, 500, 1, 1, false, false); // Corrupted Wyvern (Left)
    WaitFor(
        NPCPartHP(3010830, 10) <= 1
            || NPCPartHP(3010831, 10) <= 1
            || HPRatio(3010830) <= 0.001
            || HPRatio(3010831) <= 0.001);
    SetEventFlag(13010890, ON);
    GotoIf(L0, NPCPartHP(3010830, 10) <= 0);
    GotoIf(L1, NPCPartHP(3010831, 10) <= 0);
    GotoIf(L0, HPRatio(3010830) <= 0.001);
    GotoIf(L1, HPRatio(3010831) <= 0.001);
L0:
    SetCharacterHPBarDisplay(3010830, Disabled);
    SetLockOnPoint(3010830, 220, Disabled);
    ForceAnimationPlayback(3010830, 20005, false, false, false, 0, 1);
    SetCharacterAnimationState(3010830, Disabled);
    WaitFixedTimeSeconds(3);
    SetCharacterHPBarDisplay(3010831, Disabled);
    SetLockOnPoint(3010831, 220, Disabled);
    SetCharacterAnimationState(3010831, Disabled);
    ForceAnimationPlayback(3010831, 20005, false, true, false, 0, 1);
    SetNetworkUpdateRate(3010830, true, CharacterUpdateFrequency.Every5Frames);
    SetNetworkUpdateRate(3010831, true, CharacterUpdateFrequency.Every5Frames);
    EndEvent();
L1:
    SetCharacterHPBarDisplay(3010831, Disabled);
    SetLockOnPoint(3010831, 220, Disabled);
    ForceAnimationPlayback(3010831, 20005, false, false, false, 0, 1);
    SetCharacterAnimationState(3010831, Disabled);
    WaitFixedTimeSeconds(3);
    SetCharacterHPBarDisplay(3010830, Disabled);
    SetLockOnPoint(3010830, 220, Disabled);
    SetCharacterAnimationState(3010830, Disabled);
    ForceAnimationPlayback(3010830, 20005, false, true, false, 0, 1);
    SetNetworkUpdateRate(3010830, true, CharacterUpdateFrequency.Every5Frames);
    SetNetworkUpdateRate(3010831, true, CharacterUpdateFrequency.Every5Frames);
    EndEvent();
});

// Corrupted Wyvern (Left) - Spawn and Treasure Control
$Event(13015556, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetLockOnPoint(X0_4, 220, Disabled);
    EndIf(EventFlag(X4_4));
    WaitFor(EventFlag(X12_4));
    if (!EventFlag(X8_4)) {
        ForceAnimationPlayback(X0_4, 700, true, false, false, 0, 1);
        ChangeCharacterEnableState(X0_4, Enabled);
        SetCharacterAnimationState(X0_4, Enabled);
        SetCharacterAIState(X0_4, Disabled);
        SetCharacterGravity(X0_4, Disabled);
        SetCharacterInvincibility(X0_4, Enabled);
        SetCharacterHPBarDisplay(X0_4, Disabled);
        SetCharacterMaphit(X0_4, true);
        WaitFor(EventFlag(X8_4));
        SetCharacterAIState(X0_4, Enabled);
        SetLockOnPoint(X0_4, 220, Enabled);
        SetCharacterInvincibility(X0_4, Disabled);
        SetCharacterHPBarDisplay(X0_4, Enabled);
        ForceAnimationPlayback(X0_4, 1700, false, false, false, 0, 1);
    }
L0:
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
    SetCharacterAIState(X0_4, Enabled);
    SetLockOnPoint(X0_4, 220, Enabled);
    SetCharacterInvincibility(X0_4, Disabled);
    SetCharacterHPBarDisplay(X0_4, Enabled);
    WaitFor(HPRatio(X0_4) <= 0);
    SetEventFlag(X4_4, ON);
    SetNetworkUpdateRate(3010830, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(3010830, 20007, false, false, true, 0, 1);
    WaitFixedTimeSeconds(6.8);
    ForceCharacterDeath(3010830, true);
    ChangeCharacterEnableState(3010830, Disabled);
    SetCharacterAnimationState(3010830, Disabled);
    SetNetworkUpdateRate(3010830, false, CharacterUpdateFrequency.NoUpdate);
    AwardItemLot(31411000);
});

// Corrupted Wyvern (Right) - Spawn and Treasure Control
$Event(13015557, Restart, function(X0_4, X4_4, X8_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetLockOnPoint(X0_4, 220, Disabled);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    EndIf(EventFlag(X4_4));
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterInvincibility(X0_4, Enabled);
    if (!EventFlag(X8_4)) {
        ForceAnimationPlayback(X0_4, 700, true, false, false, 0, 1);
        ChangeCharacterEnableState(X0_4, Enabled);
        SetCharacterAnimationState(X0_4, Enabled);
        SetCharacterAIState(X0_4, Disabled);
        SetCharacterGravity(X0_4, Disabled);
        SetCharacterInvincibility(X0_4, Enabled);
        SetCharacterHPBarDisplay(X0_4, Disabled);
        SetCharacterMaphit(X0_4, true);
        WaitFor(EventFlag(X8_4));
        SetCharacterAIState(X0_4, Enabled);
        SetCharacterInvincibility(X0_4, Disabled);
        SetCharacterHPBarDisplay(X0_4, Enabled);
        SetLockOnPoint(X0_4, 220, Enabled);
        ForceAnimationPlayback(X0_4, 1700, false, true, false, 0, 1);
    }
L0:
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterInvincibility(X0_4, Disabled);
    SetCharacterHPBarDisplay(X0_4, Enabled);
    SetLockOnPoint(X0_4, 220, Enabled);
    WaitFor(HPRatio(X0_4) <= 0);
    SetEventFlag(X4_4, ON);
    SetNetworkUpdateRate(3010831, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(3010831, 20007, false, false, true, 0, 1);
    WaitFixedTimeSeconds(6.8);
    ForceCharacterDeath(3010831, true);
    ChangeCharacterEnableState(3010831, Disabled);
    SetCharacterAnimationState(3010831, Disabled);
    SetNetworkUpdateRate(3010831, false, CharacterUpdateFrequency.NoUpdate);
});

// Corrupted Wyvern (Left) - Warp
$Event(13015558, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X8_4));
    WaitFor(CharacterBackreadStatus(X0_4));
    CharacterWarpRequest(X0_4, TargetEntityType.Character, X4_4, X12_4);
    if (!EntityInRadiusOfEntity(10000, X0_4, 10, 1)) {
        WaitFixedTimeSeconds(5);
        RestartEvent();
    }
    WaitFixedTimeFrames(5);
    RestartEvent();
});

// Corrupted Wyvern (Right) - Warp
$Event(13015559, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X8_4));
    WaitFor(CharacterBackreadStatus(X0_4));
    CharacterWarpRequest(X0_4, TargetEntityType.Character, X4_4, X12_4);
    if (!EntityInRadiusOfEntity(10000, X0_4, 10, 1)) {
        WaitFixedTimeSeconds(5);
        RestartEvent();
    }
    WaitFixedTimeFrames(5);
    RestartEvent();
});

// Corrupted Wyvern (Left) - Set Effect on Wakeup
$Event(13015580, Restart, function() {
    EndIf(EventFlag(13010890));
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.Hollow)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 3012300));
    SetSpEffect(3010830, 11021);
    SetSpEffect(3010830, 11023);
    WaitFixedTimeFrames(190);
    RestartEvent();
});

// Corrupted Wyvern (Left) - Set Effect on Wakeup
$Event(13015581, Restart, function() {
    EndIf(EventFlag(13010890));
    WaitFor(
        InArea(10000, 3012310)
            && (HasDamageType(3010830, -1, DamageType.Unspecified)
                || HasDamageType(3010831, -1, DamageType.Unspecified)));
    SetSpEffect(3010830, 11022);
    WaitFixedTimeFrames(190);
    RestartEvent();
});

// Corrupted Wyvern (Right) - Set Effect on Wakeup
$Event(13015585, Restart, function() {
    EndIf(EventFlag(13010890));
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.Hollow)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 3012300) || InArea(10000, 3012301)));
    SetSpEffect(3010831, 11031);
    SetSpEffect(3010831, 11032);
    WaitFixedTimeFrames(150);
    RestartEvent();
});

// Corrupted Wyvern - Flag
$Event(13015590, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(CharacterHasEventMessage(X4_4, X8_4));
    SetEventFlag(X0_4, ON);
});

// ---------------------------------------
// Dragonslayer Armour - Boss Start
// ---------------------------------------
$Event(13015810, Restart, function() {
    const entity_DragonslayerArmour = 3010800;
    const entity_PilgrimAngel1      = 3010801;
    const entity_PilgrimAngel2      = 3010802;

    const trigger_DragonslayerArmor_EntranceZone = 3012830;

    const flag_DragonslayerArmour_Defeated = 13010800;
    const flag_DragonslayerArmour_InBattle = 13015805;

    const name_DragonslayerArmour = 903160;

    // Disable at init
    SetCharacterAIState(entity_DragonslayerArmour, Disabled);
    ChangeCharacterEnableState(entity_DragonslayerArmour, Disabled);
    SetCharacterAnimationState(entity_DragonslayerArmour, Disabled);
    SetCharacterGravity(entity_DragonslayerArmour, Disabled);

    SetCharacterGravity(entity_PilgrimAngel1, Disabled);
    SetCharacterMaphit(entity_PilgrimAngel1, true);
    SetCharacterAIState(entity_PilgrimAngel1, Disabled);
    ChangeCharacterEnableState(entity_PilgrimAngel1, Disabled);
    SetCharacterAnimationState(entity_PilgrimAngel1, Disabled);

    SetCharacterGravity(entity_PilgrimAngel2, Disabled);
    SetCharacterMaphit(entity_PilgrimAngel2, true);
    SetCharacterAIState(entity_PilgrimAngel2, Disabled);
    ChangeCharacterEnableState(entity_PilgrimAngel2, Disabled);
    SetCharacterAnimationState(entity_PilgrimAngel2, Disabled);

    // End function if Dragonslayer Armour has already been defeated
    EndIf(EventFlag(flag_DragonslayerArmour_Defeated));

    // Enable entities
    ChangeCharacterEnableState(entity_DragonslayerArmour, Enabled);
    ChangeCharacterEnableState(entity_PilgrimAngel1, Enabled);
    SetCharacterAnimationState(entity_PilgrimAngel1, Enabled);
    ChangeCharacterEnableState(entity_PilgrimAngel2, Enabled);
    SetCharacterAnimationState(entity_PilgrimAngel2, Enabled);

    // Skip to Label0 if function has already run once
    if (!ThisEventSlot()) {
        // Play initial pose
        ForceAnimationPlayback(entity_DragonslayerArmour, 700, true, false, false, 0, 1);
        // Play rise up pose once player enters arena
        WaitFor(
            EventFlag(flag_DragonslayerArmour_InBattle)
                && InArea(10000, trigger_DragonslayerArmor_EntranceZone));
        WaitFixedTimeSeconds(2);
        ForceAnimationPlayback(entity_DragonslayerArmour, 1700, false, false, false, 0, 1);
    }

L0:
    // Setup entities fully
    SetCharacterGravity(entity_DragonslayerArmour, Enabled);
    SetCharacterAnimationState(entity_DragonslayerArmour, Enabled);
    SetCharacterAIState(entity_DragonslayerArmour, Enabled);
    SetNetworkUpdateRate(entity_DragonslayerArmour, true, CharacterUpdateFrequency.AlwaysUpdate);
    ActivateMultiplayerdependantBuffs(entity_DragonslayerArmour);
    ActivateMultiplayerdependantBuffs(entity_PilgrimAngel1);
    ActivateMultiplayerdependantBuffs(entity_PilgrimAngel2);

    if (NumberOfClientsOfType(ClientType.Invader) != 0) {
        SetNetworkUpdateAuthority(entity_DragonslayerArmour, AuthorityLevel.Forced);
        SetNetworkUpdateAuthority(entity_PilgrimAngel1, AuthorityLevel.Forced);
        SetNetworkUpdateAuthority(entity_PilgrimAngel2, AuthorityLevel.Forced);
    }

    DisplayBossHealthBar(Enabled, entity_DragonslayerArmour, 0, name_DragonslayerArmour);
});

// ---------------------------------------
// Dragonslayer Armour - Enable Pilgrim Angels
// ---------------------------------------
$Event(13015811, Restart, function() {
    const entity_DragonslayerArmour = 3010800;
    const entity_PilgrimAngel1      = 3010801;
    const entity_PilgrimAngel2      = 3010802;

    const flag_DragonslayerArmour_Defeated = 13010800;

    // End function if Dragonslayer Armour has already been defeated
    EndIf(EventFlag(flag_DragonslayerArmour_Defeated));

    // Setup invincibility for the pilgrim angels
    SetCharacterInvincibility(entity_PilgrimAngel1, Enabled);
    SetCharacterInvincibility(entity_PilgrimAngel2, Enabled);

    // Play unique animation and enable Pilgrim Angel AI when Dragonslayer Armour hits 70% HP
    WaitFor(
        HPRatio(entity_DragonslayerArmour) <= 0.7
            && CharacterDamagedBy(entity_DragonslayerArmour, 10000));
    ForceAnimationPlayback(entity_DragonslayerArmour, 20000, false, true, false, 0, 1);
    SetNetworkUpdateRate(entity_PilgrimAngel1, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAIState(entity_PilgrimAngel1, Enabled);
    SetNetworkUpdateRate(entity_PilgrimAngel2, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterAIState(entity_PilgrimAngel2, Enabled);
    SetCharacterInvincibility(entity_PilgrimAngel1, Disabled);
    SetCharacterInvincibility(entity_PilgrimAngel2, Disabled);
});

// ---------------------------------------
// Dragonslayer Armour - Boss Kill
// ---------------------------------------
$Event(13015812, Restart, function() {
    const entity_DragonslayerArmour = 3010800;
    const entity_PilgrimAngel1      = 3010801;
    const entity_PilgrimAngel2      = 3010802;

    const obj_DragonslayerArmour_Fogwall = 3011800;

    const flag_DragonslayerArmour_Defeated = 13010800;

    const name_DragonslayerArmour = 903160;

    // End function if Dragonslayer Armour has already been defeated
    EndIf(EventFlag(flag_DragonslayerArmour_Defeated));

    // Setup defeat state once Dragonslayer Armour reaches 0% HP
    WaitFor(HPRatio(entity_DragonslayerArmour) <= 0);
    WaitFixedTimeSeconds(3.5);
    PlaySE(entity_DragonslayerArmour, SoundType.s_SFX, 777777777);

    WaitFor(CharacterDead(entity_DragonslayerArmour));
    WaitFixedTimeSeconds(3.5);
    DisplayBossHealthBar(Disabled, entity_DragonslayerArmour, 0, name_DragonslayerArmour);

    DeactivateObject(obj_DragonslayerArmour_Fogwall, Disabled);
    HandleBossDefeat(entity_DragonslayerArmour);
    SetNetworkUpdateRate(entity_DragonslayerArmour, false, CharacterUpdateFrequency.AlwaysUpdate);
    ChangeCamera(-1, -1);
    ForceCharacterDeath(entity_PilgrimAngel1, false);
    SetNetworkUpdateRate(entity_PilgrimAngel1, false, CharacterUpdateFrequency.AlwaysUpdate);
    ForceCharacterDeath(entity_PilgrimAngel2, false);
    SetNetworkUpdateRate(entity_PilgrimAngel2, false, CharacterUpdateFrequency.AlwaysUpdate);

    SetEventFlag(flag_DragonslayerArmour_Defeated, ON);
    SetEventFlag(9308, ON);
    SetEventFlag(6308, ON);
    
    // Boss Kill
    InitializeCommonEvent(20020000, 25001014, 25002014, 260150002, 120130); 
});

// ---------------------------------------
// Dragonslayer Armour - Change Camera
// ---------------------------------------
$Event(13015815, Restart, function() {
    const flag_DragonslayerArmour_Defeated = 13010800;
    const flag_DragonslayerArmour_InBattle = 13015805;

    const trigger_DragonslayerArmor_EntranceZone = 3012830;

    // End function if Dragonslayer Armour has already been defeated
    EndIf(EventFlag(flag_DragonslayerArmour_Defeated));
    SetNetworkSyncState(Disabled);
    WaitFor(
        EventFlag(flag_DragonslayerArmour_InBattle)
            && InArea(10000, trigger_DragonslayerArmor_EntranceZone));
    ChangeCamera(3160, 3160);
});

// ---------------------------------------
// Dragonslayer Armour - Pilgrim Angel State
// ---------------------------------------
$Event(13015830, Restart, function(X0_4, X4_4) {
    const trigger_DragonslayerArmor_EntranceZone = 3012830;

    const flag_DragonslayerArmour_Defeated = 13010800;

    SetCharacterAIState(X0_4, Disabled);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphit(X0_4, true);
    EndIf(EventFlag(flag_DragonslayerArmour_Defeated));
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 30000, true, false, false, 0, 1);
    WaitFor(InArea(10000, trigger_DragonslayerArmor_EntranceZone));
    WaitFixedTimeSeconds(X4_4);
    ForceAnimationPlayback(X0_4, 20000, false, true, false, 0, 1);
    WaitFixedTimeFrames(1);
    ChangeCharacterEnableState(X0_4, Disabled);
});

// ---------------------------------------
// Dragonslayer Armour - Fogwalls
// ---------------------------------------
$Event(13015820, Restart, function() {
    const obj_DragonslayerArmour_Fogwall     = 3011800;
    const obj_DragonslayerArmour_BackFogwall = 3011801;

    const trigger_DragonslayerArmor_EntranceZone = 3012830;
    const trigger_DragonslayerArmor_FogwallZone  = 3012801;
    const trigger_DragonslayerArmor_FogwallExit  = 3012800;

    const flag_DragonslayerArmour_Defeated     = 13010800;
    const flag_DragonslayerArmour_InBattle     = 13015805;
    const flag_DragonslayerArmour_ClientEnter  = 13015806;
    const flag_DragonslayerArmour_BossStart    = 13015810; // Event ID flag
    const flag_DragonslayerArmour_PilgrimStart = 13015811; // Event ID flag

    // Dragonslayer Armour - Enter Boss Room
    InitializeCommonEvent(20005800, flag_DragonslayerArmour_Defeated, obj_DragonslayerArmour_Fogwall, trigger_DragonslayerArmor_FogwallZone, flag_DragonslayerArmour_InBattle, obj_DragonslayerArmour_Fogwall, 0, 0, trigger_DragonslayerArmor_FogwallExit);

    // Dragonslayer Armour - Enter Boss Room (Client)
    InitializeCommonEvent(20005801, flag_DragonslayerArmour_Defeated, obj_DragonslayerArmour_Fogwall, trigger_DragonslayerArmor_FogwallZone, flag_DragonslayerArmour_InBattle, obj_DragonslayerArmour_Fogwall, flag_DragonslayerArmour_ClientEnter);

    // Dragonslayer Armour - Boss Sound State
    InitializeCommonEvent(20001836, flag_DragonslayerArmour_Defeated, flag_DragonslayerArmour_InBattle, flag_DragonslayerArmour_ClientEnter, flag_DragonslayerArmour_BossStart, 3012803, 3012804, flag_DragonslayerArmour_PilgrimStart);

    // Dragonslayer Armour - Toggle Fogwall State
    InitializeCommonEvent(20005820, flag_DragonslayerArmour_Defeated, obj_DragonslayerArmour_Fogwall, 3, 0);
    InitializeCommonEvent(20005820, flag_DragonslayerArmour_Defeated, obj_DragonslayerArmour_BackFogwall, 3, 0);

    // Boss - Enter Fogwall
    InitializeCommonEvent(20005810, flag_DragonslayerArmour_Defeated, obj_DragonslayerArmour_Fogwall, trigger_DragonslayerArmor_FogwallZone, 10000);
});

//----------------------------------------
// Core
// -- Initialization commands go here.
//----------------------------------------
$Event(13017000, Default, function() {
    
    //# Bonfires
    InitializeEvent(0, 13017010, 0); 
    
    //# Treasure
    InitializeEvent(0, 13017011, 0); 
    
    //# Scripted Treasure
    InitializeEvent(0, 13017013, 0); 
    
    //# Scripted Enemies
    InitializeEvent(0, 13017014, 0);
    
    //# Interactables
    InitializeEvent(0, 13017015, 0);
    
    //# Friendly Characters
    InitializeEvent(0, 13017050, 0);
    
    //# Intruders
    InitializeEvent(0, 13017051, 0);
    
    //# Summons
    InitializeEvent(0, 13017052, 0); 
    
    //# Conjurations
    InitializeEvent(0, 13017053, 0);
    
    //# Bosses
    InitializeEvent(0, 13017060, 0);
    
    //# Gauntlet
    InitializeEvent(0, 13017070, 0);
    
    //# Ceremony
    InitializeEvent(0, 13017200, 0);
});

//----------------------------------------
// Bonfires
// -- Bonfire commands go here.
//----------------------------------------
$Event(13017010, Default, function() {

    // Bonfires - Skip if in Flameless
    if(!EventFlag(25000110))
    {
        RegisterBonfire(13010000, 3011950, 5, 180, 0); // Lothric Castle
        RegisterBonfire(13010001, 3011951, 5, 180, 0); // Dragonslayer Armour
        RegisterBonfire(13010002, 3011952, 5, 180, 0); // Dragon Barracks
    }
    else
    {
        DeactivateObject(3011950, Disabled);
        DeactivateObject(3011951, Disabled);
        DeactivateObject(3011952, Disabled);
    }
});

//----------------------------------------
// Treasure
// -- Basic treasure commands go here.
//----------------------------------------
$Event(13017011, Default, function() {
    // Auto-shut opened chests
    BatchSetEventFlags(13011470, 13011474, OFF);

    BatchSetEventFlags(20000950, 20000954, OFF);
    RandomlySetEventFlagInRange(20000950, 20000954, ON);
    
    // Mimic/Chest 1
    InitializeCommonEvent(20087201, 20000950, 3010900);
    InitializeCommonEvent(20087200, 20000950, 13011470, 3011470, 3014470, 13010900, 3010900, 53010400);
    
    // Mimic/Chest 2
    InitializeCommonEvent(20087201, 20000951, 3010901);
    InitializeCommonEvent(20087200, 20000951, 13011471, 3011471, 3014471, 13010901, 3010901, 53010420);
    
    // Mimic/Chest 3
    InitializeCommonEvent(20087201, 20000952, 3010902);
    InitializeCommonEvent(20087200, 20000952, 13011472, 3011472, 3014472, 13010902, 3010902, 53010420);
    
    // Mimic/Chest 4
    InitializeCommonEvent(20087201, 20000953, 3010903);
    InitializeCommonEvent(20087200, 20000953, 13011473, 3011473, 3014473, 13010903, 3010903, 53010430);
    
    // Mimic/Chest 5
    InitializeCommonEvent(20087201, 20000954, 3010904);
    InitializeCommonEvent(20087200, 20000954, 13011474, 3011474, 3014474, 13010904, 3010904, 53010440);
});


//----------------------------------------
// Scripted Treasure
// -- Complex treasure commands go here.
//----------------------------------------
$Event(13017013, Default, function() {
    
    // Lothric Knight: Lothric Knight Greatsword
    InitializeCommonEvent(20005351, 3010417, 3012000, 53012000, 1); 
    
    // Lothric Knight: Lothric Knight Long Spear + Lothric Knight Greatshield
    InitializeCommonEvent(20005351, 3010420, 3012010, 53012010, 1); 
    
    // Winged Knight: Winged Knight Halberd
    InitializeCommonEvent(20005351, 3010450, 3012030, 53012030, 1); 
    
    // Winged Knight: Winged Knight Twinaxes
    InitializeCommonEvent(20005351, 3010451, 3012020, 53012020, 1); 
    
    // Lothric Priest: Engraved Dagger
    InitializeCommonEvent(20005351, 3010422, 3012040, 53012040, 1); 
    
    // Lothric Priest: Priest's Candlestick
    InitializeCommonEvent(20005351, 3010423, 3012050, 53012050, 1); 
});


//----------------------------------------
// Scripted Enemies
// -- Commands involving enemy appearance go here.
//----------------------------------------
$Event(13017014, Default, function() {
    
    // One-time Enemies
    InitializeCommonEvent(20008150, 13010310, 3010310); // Crystal Lizard
    InitializeCommonEvent(20008150, 13010311, 3010311); // Crystal Lizard
});


//----------------------------------------
// Interactables
// -- Commands dealing with environmental hazards and interactables go here.
//----------------------------------------
$Event(13017015, Default, function() {
    
    // Statues
    BatchSetEventFlags(25009560, 25009569, OFF);

    // The statues must be read in the right order, otherwise they will reset
    InitializeEvent(0, 13017100, 30157950, 99030200, 25009560, 25009561);
    InitializeEvent(1, 13017100, 30157953, 99030201, 25009561, 25009562);
    InitializeEvent(2, 13017100, 30157955, 99030202, 25009562, 25009563);
    InitializeEvent(3, 13017100, 30157957, 99030203, 25009563, 25009564);
    InitializeEvent(4, 13017100, 30157959, 99030204, 25009564, 25009565);
    InitializeEvent(5, 13017100, 30157952, 99030205, 25009565, 25009566);
    InitializeEvent(6, 13017100, 30157951, 99030206, 25009566, 25009567);
    InitializeEvent(7, 13017100, 30157954, 99030207, 25009567, 25009568);
    InitializeEvent(8, 13017100, 30157956, 99030208, 25009568, 25009569);
    InitializeEvent(9, 13017100, 30157958, 99030209, 25009569, 25009570);

    InitializeEvent(0, 13017101, 0); // Statue Puzzle - Solve Check
});

//----------------------------------------
// Friendly Characters
// -- Commands involving friendly characters go here. 
//----------------------------------------
$Event(13017050, Default, function() {
    
});

//----------------------------------------
// Intruders
// -- Commands involving hostile intruder characters go here. 
//----------------------------------------
$Event(13017051, Default, function() {
    
    // Luyila of Londor
    InitializeCommonEvent(20090010, 3010730, 3012730, 30310, 63010, 10100, 99005110, 99005111, 13010730, 131001, 200100); // Setup
    InitializeCommonEvent(20090020, 3010730, 85000); // Luyila of Londor

    // Dominatrix Sharron
    InitializeCommonEvent(20090010, 3010732, 3012732, 30310, 63010, 10700, 99005160, 99005161, 13010732, 131002, 200700); // Setup
    InitializeCommonEvent(20090020, 3010732, 85000); // Kill Taunt

    // The Pursuer
    InitializeCommonEvent(20090010, 3010734, 3012734, 30310, 63010, 11710, 99005310, 99005311, 13010734, 131003, 201700); // Setup
    InitializeCommonEvent(20090020, 3010734, 81200); // Kill Taunt

    // Tiny
    InitializeCommonEvent(20090010, 3010736, 3012736, 30310, 63010, 10500, 99005140, 99005141, 13010736, 131004, 200500); // Setup
    InitializeCommonEvent(20090020, 3010736, 85400); // Kill Taunt

});

//----------------------------------------
// Summons
// -- Commands involving friendly summonable characters go here. 
//----------------------------------------
$Event(13017052, Default, function() {
    
});

//----------------------------------------
// Conjurations
// -- Commands involving conjurations go here. 
//----------------------------------------
$Event(13017053, Default, function() {
    // Skeleton
    InitializeCommonEvent(20080000, 3010710); // Setup
    InitializeCommonEvent(20080001, 3010710); // Bonfire Rest
    InitializeCommonEvent(20080002, 3010710); // Tools
    InitializeCommonEvent(20080003, 3010710); // Effects
    InitializeCommonEvent(20080004, 3010710, 160760000, 160760207, 30, 1); // Summoning

    // Hollow
    InitializeCommonEvent(20080000, 3010711); // Setup
    InitializeCommonEvent(20080001, 3010711); // Bonfire Rest
    InitializeCommonEvent(20080002, 3010711); // Tools
    InitializeCommonEvent(20080003, 3010711); // Effects
    InitializeCommonEvent(20080004, 3010711, 160760001, 160760207, 30, 1); // Summoning

    // Hound
    InitializeCommonEvent(20080000, 3010712); // Setup
    InitializeCommonEvent(20080001, 3010712); // Bonfire Rest
    InitializeCommonEvent(20080002, 3010712); // Tools
    InitializeCommonEvent(20080003, 3010712); // Effects
    InitializeCommonEvent(20080004, 3010712, 160760002, 160760207, 30, 1); // Summoning

    // Carthus Warrior
    InitializeCommonEvent(20080000, 3010713); // Setup
    InitializeCommonEvent(20080001, 3010713); // Bonfire Rest
    InitializeCommonEvent(20080002, 3010713); // Tools
    InitializeCommonEvent(20080003, 3010713); // Effects
    InitializeCommonEvent(20080004, 3010713, 160760003, 160760207, 30, 1); // Summoning

    // Lothric Knight
    InitializeCommonEvent(20080000, 3010714); // Setup
    InitializeCommonEvent(20080001, 3010714); // Bonfire Rest
    InitializeCommonEvent(20080002, 3010714); // Tools
    InitializeCommonEvent(20080003, 3010714); // Effects
    InitializeCommonEvent(20080004, 3010714, 160760004, 160760207, 30, 1); // Summoning

    // Lycanthrope
    InitializeCommonEvent(20080000, 3010715); // Setup
    InitializeCommonEvent(20080001, 3010715); // Bonfire Rest
    InitializeCommonEvent(20080002, 3010715); // Tools
    InitializeCommonEvent(20080003, 3010715); // Effects
    InitializeCommonEvent(20080004, 3010715, 160760005, 160760207, 30, 1); // Summoning

    // Black Knight
    InitializeCommonEvent(20080000, 3010716); // Setup
    InitializeCommonEvent(20080001, 3010716); // Bonfire Rest
    InitializeCommonEvent(20080002, 3010716); // Tools
    InitializeCommonEvent(20080003, 3010716); // Effects
    InitializeCommonEvent(20080004, 3010716, 160760006, 160760207, 30, 1); // Summoning

    // Abyss Watcher
    InitializeCommonEvent(20080000, 3010717); // Setup
    InitializeCommonEvent(20080001, 3010717); // Bonfire Rest
    InitializeCommonEvent(20080002, 3010717); // Tools
    InitializeCommonEvent(20080003, 3010717); // Effects
    InitializeCommonEvent(20080004, 3010717, 160760007, 160760207, 30, 1); // Summoning

    // Stone Gargoyle
    InitializeCommonEvent(20080000, 3010718); // Setup
    InitializeCommonEvent(20080001, 3010718); // Bonfire Rest
    InitializeCommonEvent(20080002, 3010718); // Tools
    InitializeCommonEvent(20080003, 3010718); // Effects
    InitializeCommonEvent(20080004, 3010718, 160760008, 160760207, 30, 1); // Summoning

    // Skeleton Unique
    InitializeCommonEvent(20080010, 3010710);
    InitializeCommonEvent(20080011, 3010710);
    InitializeCommonEvent(20080012, 3010710);

    // Hollow Unique
    InitializeCommonEvent(20080020, 3010711);
    InitializeCommonEvent(20080021, 3010711);
    InitializeCommonEvent(20080022, 3010711);

    // Hound Unique
    InitializeCommonEvent(20080030, 3010712);
    InitializeCommonEvent(20080031, 3010712);
    InitializeCommonEvent(20080032, 3010712);

    // Warrior Unique
    InitializeCommonEvent(20080040, 3010713);
    InitializeCommonEvent(20080041, 3010713);
    InitializeCommonEvent(20080042, 3010713);

    // Lothric Knight Unique
    InitializeCommonEvent(20080050, 3010714);
    InitializeCommonEvent(20080051, 3010714);
    InitializeCommonEvent(20080052, 3010714);

    // Lycanthrope Unique
    InitializeCommonEvent(20080060, 3010715);
    InitializeCommonEvent(20080061, 3010715);
    InitializeCommonEvent(20080062, 3010715);

    // Black Knight Unique
    InitializeCommonEvent(20080070, 3010716);
    InitializeCommonEvent(20080071, 3010716);
    InitializeCommonEvent(20080072, 3010716);

    // Abyss Watcher Unique
    InitializeCommonEvent(20080080, 3010717);
    InitializeCommonEvent(20080081, 3010717);
    InitializeCommonEvent(20080082, 3010717);

    // Gargoyle Unique
    InitializeCommonEvent(20080090, 3010718);
    InitializeCommonEvent(20080091, 3010718);
    InitializeCommonEvent(20080092, 3010718);
});

//----------------------------------------
// Bosses
// -- Commands that deal with new Bosses go here.
//----------------------------------------
$Event(13017060, Default, function() {
    
});

//----------------------------------------
// Gauntlet
// -- Commands that deal with the Gauntlet journey type go here.
//----------------------------------------
$Event(13017070, Default, function() {
    // Gauntlet Mode
    InitializeCommonEvent(20090800, 3012050);
    InitializeCommonEvent(20090800, 3012051);
});

//----------------------------------------
// Misc
// -- Niche events go here.
//----------------------------------------
// Statue Puzzle - Engraving
$Event(13017100, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);

    WaitFor(ActionButtonInArea(9356, X0_4));
    DisplayEpitaphMessage(X4_4);

    SetEventFlag(X8_4, ON);

    // If next flag hasn't been set, don't reset
    if (EventFlag(X12_4)) {
        BatchSetEventFlags(25009560, 25009569, OFF);
    }

    WaitFixedTimeSeconds(3);

    RestartEvent();
});

// Statue Puzzle - Solved
$Event(13017101, Default, function() {
    WaitFor(AllBatchEventFlags(25009560, 25009569));

    WaitFixedTimeSeconds(3);

    AwardItemLot(3010800);

    EndEvent();
});

// Ceremony
$Event(13017200, Restart, function() {
    const flag_EclipseActive = 230;
    
    // Eclipse
    if(EventFlag(flag_EclipseActive))
    {
        SetMapCeremony(30, 1, 10);
    }
    // Default
    else
    {
        SetMapCeremony(30, 1, 0);
    }
});
