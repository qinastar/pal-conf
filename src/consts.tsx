interface Entry {
    name: string,
    id: string,
    defaultValue: string,
    type: 'string' | 'integer' | 'float' | 'boolean' | 'select',
    options?: string[],
    range?: [number, number],
    desc?: string,
    step?: number,
}

/*
Made by inferring the following default values from the game's config file:
Difficulty=None,
DayTimeSpeedRate=1.000000,
NightTimeSpeedRate=1.000000,
ExpRate=1.000000,
PalCaptureRate=1.000000,
PalSpawnNumRate=1.000000,
PalDamageRateAttack=1.000000,
PalDamageRateDefense=1.000000,
PlayerDamageRateAttack=1.000000,
PlayerDamageRateDefense=1.000000,
PlayerStomachDecreaceRate=1.000000,
PlayerStaminaDecreaceRate=1.000000,
PlayerAutoHPRegeneRate=1.000000,
PlayerAutoHpRegeneRateInSleep=1.000000,
PalStomachDecreaceRate=1.000000,
PalStaminaDecreaceRate=1.000000,
PalAutoHPRegeneRate=1.000000,
PalAutoHpRegeneRateInSleep=1.000000,
BuildObjectDamageRate=1.000000,
BuildObjectDeteriorationDamageRate=1.000000,
CollectionDropRate=1.000000,
CollectionObjectHpRate=1.000000,
CollectionObjectRespawnSpeedRate=1.000000,
EnemyDropItemRate=1.000000,
DeathPenalty=All,
bEnablePlayerToPlayerDamage=False,
bEnableFriendlyFire=False,
bEnableInvaderEnemy=True,
bActiveUNKO=False,
bEnableAimAssistPad=True,
bEnableAimAssistKeyboard=False,
DropItemMaxNum=3000,
DropItemMaxNum_UNKO=100,
BaseCampMaxNum=128,
BaseCampWorkerMaxNum=15,
DropItemAliveMaxHours=1.000000,
bAutoResetGuildNoOnlinePlayers=False,
AutoResetGuildTimeNoOnlinePlayers=72.000000,
GuildPlayerMaxNum=20,
PalEggDefaultHatchingTime=72.000000,
WorkSpeedRate=1.000000,
bIsMultiplay=False,
bIsPvP=False,
bCanPickupOtherGuildDeathPenaltyDrop=False,
bEnableNonLoginPenalty=True,
bEnableFastTravel=True,
bIsStartLocationSelectByMap=True,
bExistPlayerAfterLogout=False,
bEnableDefenseOtherGuildPlayer=False,
CoopPlayerMaxNum=4,
ServerPlayerMaxNum=32,
ServerName="Default Palworld Server",
ServerDescription="",
AdminPassword="",
ServerPassword="",
PublicPort=8211,
PublicIP="",
RCONEnabled=False,
RCONPort=25575,
Region="",
bUseAuth=True,
BanListURL="https://api.palworldgame.com/api/banlist.txt"
*/

export const ENTRIES: Record<string, Entry> = {
    Difficulty: {
        name: "Difficulty",
        id: "Difficulty",
        defaultValue: "None",
        type: "select",
        options: ["None"],
    },
    DayTimeSpeedRate: {
        name: "Day Time Speed Rate",
        id: "DayTimeSpeedRate",
        defaultValue: "1.000000",
        type: "float",
        range: [0.1, 5],
        step: 0.1,
    },
    NightTimeSpeedRate: {
        name: "Night Time Speed Rate",
        id: "NightTimeSpeedRate",
        defaultValue: "1.000000",
        type: "float",
        range: [0.1, 5],
        step: 0.1,
    },
    ExpRate: {
        name: "Exp Rate",
        id: "ExpRate",
        defaultValue: "1.000000",
        type: "float",
        range: [0, 20],
        step: 0.1,
    },
    PalCaptureRate: {
        name: "Pal Capture Rate",
        id: "PalCaptureRate",
        defaultValue: "1.000000",
        type: "float",
        range: [0.5, 2],
        step: 0.1,
    },
    PalSpawnNumRate: {
        name: "Pal Spawn Number Rate",
        id: "PalSpawnNumRate",
        defaultValue: "1.000000",
        type: "float",
        range: [0.5, 3],
        step: 0.1,
    },
    PalDamageRateAttack: {
        name: "Pal Damage Rate Attack",
        id: "PalDamageRateAttack",
        defaultValue: "1.000000",
        type: "float",
        range: [0.1, 5],
        step: 0.1,
    },
    PalDamageRateDefense: {
        name: "Pal Damage Rate Defense",
        id: "PalDamageRateDefense",
        defaultValue: "1.000000",
        type: "float",
        range: [0.1, 5],
        step: 0.1,
    },
    PlayerDamageRateAttack: {
        name: "Player Damage Rate Attack",
        id: "PlayerDamageRateAttack",
        defaultValue: "1.000000",
        type: "float",
        range: [0.1, 5],
        step: 0.1,
        desc: "Player damage rate when attacking",
    },
    PlayerDamageRateDefense: {
        name: "Player Damage Rate Defense",
        id: "PlayerDamageRateDefense",
        defaultValue: "1.000000",
        type: "float",
        range: [0.1, 5],
        step: 0.1,
        desc: "Player damage rate when defending",
    },
    PlayerStomachDecreaceRate: {
        name: "Player Stomach Decrease Rate",
        id: "PlayerStomachDecreaceRate",
        defaultValue: "1.000000",
        type: "float",
        range: [0.1, 5],
        step: 0.1,
    },
    PlayerStaminaDecreaceRate: {
        name: "Player Stamina Decrease Rate",
        id: "PlayerStaminaDecreaceRate",
        defaultValue: "1.000000",
        type: "float",
        range: [0.1, 5],
        step: 0.1,
    },
    PlayerAutoHPRegeneRate: {
        name: "Player Auto HP Regen Rate",
        id: "PlayerAutoHPRegeneRate",
        defaultValue: "1.000000",
        type: "float",
        range: [0.1, 5],
        step: 0.1,
    },
    PlayerAutoHpRegeneRateInSleep: {
        name: "Player Auto HP Regen Rate In Sleep",
        id: "PlayerAutoHpRegeneRateInSleep",
        defaultValue: "1.000000",
        type: "float",
        range: [0.1, 5],
        step: 0.1,
    },
    PalStomachDecreaceRate: {
        name: "Pal Stomach Decrease Rate",
        id: "PalStomachDecreaceRate",
        defaultValue: "1.000000",
        type: "float",
        range: [0.1, 5],
        step: 0.1,
    },
    PalStaminaDecreaceRate: {
        name: "Pal Stamina Decrease Rate",
        id: "PalStaminaDecreaceRate",
        defaultValue: "1.000000",
        type: "float",
        range: [0.1, 5],
        step: 0.1,
    },
    PalAutoHPRegeneRate: {
        name: "Pal Auto HP Regen Rate",
        id: "PalAutoHPRegeneRate",
        defaultValue: "1.000000",
        type: "float",
        range: [0.1, 5],
        step: 0.1,
    },
    PalAutoHpRegeneRateInSleep: {
        name: "Pal Auto HP Regen Rate In Sleep",
        id: "PalAutoHpRegeneRateInSleep",
        defaultValue: "1.000000",
        type: "float",
        range: [0.1, 5],
        step: 0.1,
    },
    BuildObjectDamageRate: {
        name: "Build Object Damage Rate",
        id: "BuildObjectDamageRate",
        defaultValue: "1.000000",
        type: "float",
        range: [0.5, 3],
        step: 0.1,
        desc: "Damage rate to build objects",
    },
    BuildObjectDeteriorationDamageRate: {
        name: "Build Object Deterioration Damage Rate",
        id: "BuildObjectDeteriorationDamageRate",
        defaultValue: "1.000000",
        type: "float",
        range: [0, 10],
        step: 0.1,
        desc: "Deterioration damage rate to build objects",
    },
    CollectionDropRate: {
        name: "Collection Drop Rate",
        id: "CollectionDropRate",
        defaultValue: "1.000000",
        type: "float",
        range: [0.5, 3],
        step: 0.1
    },
    CollectionObjectHpRate: {
        name: "Collection Object HP Rate",
        id: "CollectionObjectHpRate",
        defaultValue: "1.000000",
        type: "float",
        range: [0.5, 3],
        step: 0.1
    },
    CollectionObjectRespawnSpeedRate: {
        name: "Collection Object Respawn Speed Rate",
        id: "CollectionObjectRespawnSpeedRate",
        defaultValue: "1.000000",
        type: "float",
        range: [0.5, 3],
        step: 0.1
    },
    EnemyDropItemRate: {
        name: "Enemy Drop Item Rate",
        id: "EnemyDropItemRate",
        defaultValue: "1.000000",
        type: "float",
        range: [0.5, 3],
        step: 0.1
    },
    DeathPenalty: {
        name: "Death Penalty",
        id: "DeathPenalty",
        defaultValue: "All",
        type: "select",
        options: ["All", "Lost item and equipment", "Lost All item, equipment, pal(in inventory)"],
        desc: "Death penalty",
    },
    bEnablePlayerToPlayerDamage: {
        name: "Enable Player To Player Damage",
        id: "bEnablePlayerToPlayerDamage",
        defaultValue: "False",
        type: "boolean",
        desc: "Enable player to player damage",
    },
    bEnableFriendlyFire: {
        name: "Enable Friendly Fire",
        id: "bEnableFriendlyFire",
        defaultValue: "False",
        type: "boolean",
        desc: "Enable friendly fire",
    },
    bEnableInvaderEnemy: {
        name: "Enable Invader Enemy",
        id: "bEnableInvaderEnemy",
        defaultValue: "True",
        type: "boolean",
        desc: "Enable invader enemy",
    },
    bActiveUNKO: {
        name: "Active UNKO",
        id: "bActiveUNKO",
        defaultValue: "False",
        type: "boolean",
        desc: "Active UNKO",
    },
    bEnableAimAssistPad: {
        name: "Enable Aim Assist Pad",
        id: "bEnableAimAssistPad",
        defaultValue: "True",
        type: "boolean",
        desc: "Enable aim assist pad",
    },
    bEnableAimAssistKeyboard: {
        name: "Enable Aim Assist Keyboard",
        id: "bEnableAimAssistKeyboard",
        defaultValue: "False",
        type: "boolean",
        desc: "Enable aim assist keyboard",
    },
    DropItemMaxNum: {
        name: "Drop Item Max Num",
        id: "DropItemMaxNum",
        defaultValue: "3000",
        type: "integer",
        range: [0, 5000],
        step: 1,
        desc: "Drop item max num",
    },
    DropItemMaxNum_UNKO: {
        name: "Drop Item Max Num UNKO",
        id: "DropItemMaxNum_UNKO",
        defaultValue: "100",
        type: "integer",
        range: [0, 5000],
        step: 1,
        desc: "Drop item max num UNKO",
    },
    BaseCampMaxNum: {
        name: "Base Camp Max Num",
        id: "BaseCampMaxNum",
        defaultValue: "128",
        type: "integer",
        range: [0, 256],
        step: 1,
        desc: "Base camp max num",
    },
    BaseCampWorkerMaxNum: {
        name: "Base Camp Worker Max Num",
        id: "BaseCampWorkerMaxNum",
        defaultValue: "15",
        type: "integer",
        range: [1, 20],
        step: 1,
        desc: "Base camp worker max num",
    },
    DropItemAliveMaxHours: {
        name: "Drop Item Alive Max Hours",
        id: "DropItemAliveMaxHours",
        defaultValue: "1.000000",
        type: "float",
        range: [0, 240],
        step: 1,
        desc: "Drop item alive max hours",
    },
    bAutoResetGuildNoOnlinePlayers: {
        name: "Auto Reset Guild No Online Players",
        id: "bAutoResetGuildNoOnlinePlayers",
        defaultValue: "False",
        type: "boolean",
        desc: "Auto reset guild no online players",
    },
    AutoResetGuildTimeNoOnlinePlayers: {
        name: "Auto Reset Guild Time No Online Players",
        id: "AutoResetGuildTimeNoOnlinePlayers",
        defaultValue: "72.000000",
        type: "float",
        range: [0, 240],
        step: 1,
        desc: "Auto reset guild time no online players",
    },
    GuildPlayerMaxNum: {
        name: "Guild Player Max Num",
        id: "GuildPlayerMaxNum",
        defaultValue: "20",
        type: "integer",
        range: [1, 100],
        step: 1,
        desc: "Guild player max num",
    },
    PalEggDefaultHatchingTime: {
        name: "Pal Egg Default Hatching Time",
        id: "PalEggDefaultHatchingTime",
        defaultValue: "72.000000",
        type: "float",
        range: [0, 240],
        step: 1,
        desc: "Pal egg default hatching time",
    },
    WorkSpeedRate: {
        name: "Work Speed Rate",
        id: "WorkSpeedRate",
        defaultValue: "1.000000",
        type: "float",
        range: [0.1, 5],
        step: 0.1,
        desc: "Work speed rate",
    },
    bIsMultiplay: {
        name: "Is Multiplay",
        id: "bIsMultiplay",
        defaultValue: "False",
        type: "boolean",
        desc: "Is multiplay",
    },
    bIsPvP: {
        name: "Is PvP",
        id: "bIsPvP",
        defaultValue: "False",
        type: "boolean",
        desc: "Is PvP",
    },
    bCanPickupOtherGuildDeathPenaltyDrop: {
        name: "Can Pickup Other Guild Death Penalty Drop",
        id: "bCanPickupOtherGuildDeathPenaltyDrop",
        defaultValue: "False",
        type: "boolean",
        desc: "Can pickup other guild death penalty drop",
    },
    bEnableNonLoginPenalty: {
        name: "Enable Non Login Penalty",
        id: "bEnableNonLoginPenalty",
        defaultValue: "True",
        type: "boolean",
        desc: "Enable non login penalty",
    },
    bEnableFastTravel: {
        name: "Enable Fast Travel",
        id: "bEnableFastTravel",
        defaultValue: "True",
        type: "boolean",
        desc: "Enable fast travel",
    },
    bIsStartLocationSelectByMap: {
        name: "Is Start Location Select By Map",
        id: "bIsStartLocationSelectByMap",
        defaultValue: "True",
        type: "boolean",
        desc: "Is start location select by map",
    },
    bExistPlayerAfterLogout: {
        name: "Exist Player After Logout",
        id: "bExistPlayerAfterLogout",
        defaultValue: "False",
        type: "boolean",
        desc: "Exist player after logout",
    },
    bEnableDefenseOtherGuildPlayer: {
        name: "Enable Defense Other Guild Player",
        id: "bEnableDefenseOtherGuildPlayer",
        defaultValue: "False",
        type: "boolean",
        desc: "Enable defense other guild player",
    },
    CoopPlayerMaxNum: {
        name: "Coop Player Max Num",
        id: "CoopPlayerMaxNum",
        defaultValue: "4",
        type: "integer",
        range: [1, 4],
        step: 1,
        desc: "Coop player max num",
    },
    ServerPlayerMaxNum: {
        name: "Server Player Max Num",
        id: "ServerPlayerMaxNum",
        defaultValue: "32",
        type: "integer",
        range: [1, 100],
        step: 1,
        desc: "Server player max num",
    },
    ServerName: {
        name: "Server Name",
        id: "ServerName",
        defaultValue: "Default Palworld Server",
        type: "string",
        desc: "Server name",
    },
    ServerDescription: {
        name: "Server Description",
        id: "ServerDescription",
        defaultValue: "",
        type: "string",
        desc: "Server description",
    },
    AdminPassword: {
        name: "Admin Password",
        id: "AdminPassword",
        defaultValue: "",
        type: "string",
        desc: "Admin password",
    },
    ServerPassword: {
        name: "Server Password",
        id: "ServerPassword",
        defaultValue: "",
        type: "string",
        desc: "Server password",
    },
    PublicPort: {
        name: "Public Port",
        id: "PublicPort",
        defaultValue: "8211",
        type: "integer",
        desc: "Public port",
    },
    PublicIP: {
        name: "Public IP",
        id: "PublicIP",
        defaultValue: "",
        type: "string",
        desc: "Public IP",
    },
    RCONEnabled: {
        name: "RCON Enabled",
        id: "RCONEnabled",
        defaultValue: "False",
        type: "boolean",
        desc: "RCON enabled",
    },
    RCONPort: {
        name: "RCON Port",
        id: "RCONPort",
        defaultValue: "25575",
        type: "integer",
        desc: "RCON port",
    },
    Region: {
        name: "Region",
        id: "Region",
        defaultValue: "",
        type: "string",
        desc: "Region",
    },
    bUseAuth: {
        name: "Use Auth",
        id: "bUseAuth",
        defaultValue: "True",
        type: "boolean",
        desc: "Use auth",
    },
    BanListURL: {
        name: "Ban List URL",
        id: "BanListURL",
        defaultValue: "https://api.palworldgame.com/api/banlist.txt",
        type: "string",
        desc: "Ban list URL",
    },
};