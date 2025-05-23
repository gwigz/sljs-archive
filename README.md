<div align="center">
  <p>
    <img src="https://cdn.jsdelivr.net/gh/gwigz/sljs@master/sljs.svg" width="180" alt="sljs">
  </p>
  <br>
  <a href="https://travis-ci.org/gwigz/sljs" title="Travis CI Build Status"><img src="https://api.travis-ci.org/gwigz/sljs.svg?branch=master" alt="Travis CI Build Status"></a>
</div>
<h1>
  <!-- sljs -->
</h1>

#### Please note this library is a work in progress!

It is not intended for use yet, large changes are due to happen. See the
[todo section](#todo) for a better idea of what is missing and due to change.
Furthermore, **please don't use this for anything serious,** yet!

## About

sljs is a node.js module that allows you to interact with the virtual world
[Second Life](https://www.secondlife.com), utilizing the offical
[Second Life UDP protocol](http://wiki.secondlife.com/wiki/Protocol).

sljs has been made possible thanks to these wonderful resources:

- [node-omv](https://bitbucket.org/Wolfspirit/node-omv) by Wolfspirit for their proof of concept
- [pyogp](http://wiki.secondlife.com/wiki/PyOGP) by the late Enus Linden and their team
- [libopenmetaverse](https://github.com/openmetaversefoundation/libopenmetaverse) for kicking off the open-source "metaverse" community

sljs _is not affiliated with or sponsored by Linden Research, Linden Lab or
Second Life._

## Todo

This list is in order of how I'd like to tackle various things, and yes, it's
extremely long!

- [x] Setup code validation
- [ ] Add example script(s)
  - [ ] Maybe something that just handles login, logout and basic chat functions
- [ ] Clean up documentation
  - [ ] Add missing JSDoc comments
  - [x] Setup JSDoc generator
- [x] Add a header image to be cool like everyone else
- [x] Login using XMLRPC protocol
- [x] ~~Login using web authentication~~ protocol seems to be abandoned/unused
- [x] Pass user mac-address
- [x] ~~Pass user hardware ID~~ `id0` seems unlikely without bloat
- [x] Parse message template for predefined packet formats
- [x] Add ability to send packets/messages to simulator
- [x] Parse packet data from simulator
- [x] Handle login/region handshake
- [x] Handle sending packet acknologments for reliably flagged packets
- [x] Handle responding to `AgentMovementComplete` with basic "viewer" settings
- [x] Handle simulator ping check
- [x] Handle receiving basic agent attributes `AgentDataUpdate` and `HealthMessage`
- [x] Add method for logout
- [x] Change status values when connecting, connected, disconnected
- [x] Emit ready message and status updates
- [ ] Consider better sugar method creating `Variable` packets values, see `AgentThrottle`
- [x] Restructure folder layout, maybe combine `UDPManager` and `PacketHandler`
- [x] Move message template parsing into seperate method
  - [x] Keep and use pre-parsed JSON version
  - [x] Make generator for `./utilities/Packet.js` file
  - [x] See about adding typings based on packet format
  - [x] Consider alternative methods of packet creation
  - [x] Consider moving all buffer handling into `PacketBuffer`
- [x] Further compare to PyOGP project structure
- [ ] Verify all packet value types are handled correctly
  - [ ] Maybe add tests for these...
- [ ] Handle types of object updates packets
- [x] Add better handling to `StartPingCheck` for last ACK and such
- [ ] Add max bandwidth parameter for adjusting what is sent by `AgentThrottle`
- [ ] Add ability to change active group and ensure `AgentDataUpdate` is called
- [ ] Handle time packets such as `SimulatorViewerTimeMessage`
- [ ] Handle `ScriptControlChange` correctly
- [ ] Add basic handling for various types of messages
  - [x] Sending and receiving local/nearby chat messages
  - [ ] Sending and receiving instant messages
  - [x] Receiving object messages
  - [ ] Receiving script dialogs and permission requests
  - [ ] Group messages
  - [ ] Receiving group notices
  - [ ] Sending group notices
  - [ ] Receiving estate owner/moderator messages
  - [ ] System messages, such as simulator restarting warning
  - [ ] Teleport requests, sending accepting and declining
  - [ ] Teleport lures
- [ ] Add ability to teleport, handle currectly on force teleport and death
- [ ] Add ability see nearby agents and positions
- [ ] Add ability to sit on objects by UUID
- [ ] Add ability to play sounds and animations by UUID
- [ ] Track currently playing animations and sounds
- [ ] Add method of sending reliable packets, with ACK handling and retries
- [ ] Add "key to name" promise method
  - [x] Will need some way of adding response callbacks or acknologments
- [ ] Add freinds/buddy list population
  - [ ] Track online/offline updates
  - [ ] Add ability to message by name
  - [ ] Add listeners for nearby agents
- [ ] Add group list population
  - [ ] Handle case when being kicked from groups correctly
  - [ ] Handle ability to accept group invites
- [x] Setup documentation generator
- [ ] Create release branch/tag, change version to `1.0.0`
- [ ] Basic region, estate and parcel management tools
  - [ ] List parcels in region
  - [ ] Ability to read and change basic flags and values
  - [ ] Ability to add or remove access for agents by UUID
- [ ] Track what is currently worn/attached by current agent and nearby agents
- [ ] Track nearby active objects, scripted or physical
- [ ] Inventory handling, for listing contents and sending items
  - [ ] Make this a flag to enable/disable saving memory and bandwidth
  - [ ] Consider ability to search, maybe use a database format instead
  - [ ] Add the folowing methods:
    - [ ] Enable or disabling gestures
    - [ ] Playing sounds and animations by inventory UUID
    - [ ] Attaching objects from inventory
	- [ ] Deleting items, safely (no root/system folders etc.)
    - [ ] Rezzing objects in-world
    - [ ] Sharing items to agents by UUID
    - [ ] Viewing and changing item permissions
    - [ ] Reading notecard data
    - [ ] Additional asset creation/handling should come later
  - [ ] Active gesture list, including fast lookup for triggers
- [ ] Basic agent movement controls
  - [ ] Forward, left right backwards
  - [ ] Jumping and switching to flying modes
  - [ ] Following agents or objects
- [ ] Look and selection parsing of nearby agents
- [ ] Ability to send look and selection packets
  - [ ] Track what is currently selected

...and more?
