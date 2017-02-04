/**
 * Represents a simulator.
 */
class Simulator {
  constructor(client, data) {
    /**
     * The Client that instantiated this Simulator object.
     * @name Simulator#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', { value: client })

    this.setup(data)
  }

  setup(data) {
    /**
     * IP address of this Simulator.
     * @type {string}
     */
    this.ip = data.ip

    /**
     * Port of which we are able to send UDP packets through to this Simulator.
     * @type {number}
     */
    this.port = data.port

    /**
     * Circuit code we are currently using for this Simulator.
     * @type {number}
     */
    this.circuit = data.circuit

    /**
     * Capabilities URI for additional features.
     * @link http://wiki.secondlife.com/wiki/Capabilities
     * @type {?string}
     */
    this.uri = data.uri || null

    /**
     * Simulator channel and version number details.
     * @type {?string}
     */
    this.channel = null
  }

  /*
    Capabilities
    --------------------
    AgentPreferences
    AgentState
    AttachmentResources
    AvatarPickerSearch
    AvatarRenderInfo
    CharacterProperties
    ChatSessionRequest
    CopyInventoryFromNotecard
    CreateInventoryCategory
    DispatchRegionInfo
    DirectDelivery
    EnvironmentSettings
    EstateChangeInfo
    EventQueueGet
    FacebookConnect
    FlickrConnect
    TwitterConnect
    FetchLib2
    FetchLibDescendents2
    FetchInventory2
    FetchInventoryDescendents2
    IncrementCOFVersion
    GetDisplayNames
    GetExperiences
    AgentExperiences
    FindExperienceByName
    GetExperienceInfo
    GetAdminExperiences
    GetCreatorExperiences
    ExperiencePreferences
    GroupExperiences
    UpdateExperience
    IsExperienceAdmin
    IsExperienceContributor
    RegionExperiences
    GetMesh
    GetMesh2
    GetMetadata
    GetObjectCost
    GetObjectPhysicsData
    GetTexture
    GroupAPIv1
    GroupMemberData
    GroupProposalBallot
    HomeLocation
    LandResources
    LSLSyntax
    MapLayer
    MapLayerGod
    MeshUploadFlag
    NavMeshGenerationStatus
    NewFileAgentInventory
    ObjectMedia
    ObjectMediaNavigate
    ObjectNavMeshProperties
    ParcelPropertiesUpdate
    ParcelVoiceInfoRequest
    ProductInfoRequest
    ProvisionVoiceAccountRequest
    RemoteParcelRequest
    RenderMaterials
    RequestTextureDownload
    ResourceCostSelected
    RetrieveNavMeshSrc
    SearchStatRequest
    SearchStatTracking
    SendPostcard
    SendUserReport
    SendUserReportWithScreenshot
    ServerReleaseNotes
    SetDisplayName
    SimConsoleAsync
    SimulatorFeatures
    StartGroupProposal
    TerrainNavMeshProperties
    TextureStats
    UntrustedSimulatorMessage
    UpdateAgentInformation
    UpdateAgentLanguage
    UpdateAvatarAppearance
    UpdateGestureAgentInventory
    UpdateGestureTaskInventory
    UpdateNotecardAgentInventory
    UpdateNotecardTaskInventory
    UpdateScriptAgent
    UpdateScriptTask
    UploadBakedTexture
    ViewerMetrics
    ViewerStartAuction
    ViewerStats
  */
}

module.exports = Simulator
