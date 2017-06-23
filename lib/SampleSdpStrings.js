// A generic sdp session block
var baseSessionSdp = "" +
"v=0\r\n" +
"o=- 814997227879783433 5 IN IP4 127.0.0.1\r\n" +
"s=-\r\n" +
"t=0 0\r\n" +
"a=msid-semantic: WMS 0836cc8e-a7bb-47e9-affb-0599414bc56d\r\n" +
"a=group:BUNDLE audio video data\r\n";

// A basic sdp audio mline with a single stream
var baseAudioMLineSdp = "" +
"m=audio 54405 RTP/SAVPF 111 103 104 126\r\n" +
"c=IN IP4 172.29.32.39\r\n" +
"a=rtpmap:111 opus/48000/2\r\n" +
"a=rtpmap:103 ISAC/16000\r\n" +
"a=rtpmap:104 ISAC/32000\r\n" +
"a=rtpmap:126 telephone-event/8000\r\n" +
"a=fmtp:111 minptime=10;useinbandfec=1\r\n" +
"a=rtcp:9 IN IP4 0.0.0.0\r\n" +
"a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\n" +
"a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\n" +
"a=setup:passive\r\n" +
"a=mid:audio\r\n" +
"a=sendrecv\r\n" +
"a=ice-ufrag:adPg\r\n" +
"a=ice-pwd:Xsr05Mq8S7CR44DAnusZE26F\r\n" +
"a=fingerprint:sha-256 6A:39:DE:11:24:AD:2E:4E:63:D6:69:D3:85:05:53:C7:3C:38:A4:B7:91:74:C0:91:44:FC:94:63:7F:01:AB:A9\r\n" +
"a=candidate:1581043602 1 udp 2122260223 172.29.32.39 54405 typ host generation 0\r\n" +
"a=ssrc:124723944 cname:peDGrDD6WsxUOki/\r\n" +
"a=ssrc:124723944 msid:dcbb0236-cea5-402e-9e9a-595c65ffcc2a 40abf2d3-a415-4c68-8c17-2a038e8bebcf\r\n" +
"a=ssrc:124723944 mslabel:dcbb0236-cea5-402e-9e9a-595c65ffcc2a\r\n" +
"a=ssrc:124723944 label:40abf2d3-a415-4c68-8c17-2a038e8bebcf\r\n" +
"a=rtcp-mux\r\n";

// A basic sdp application mline
var baseDataMLineSdp = "" +
"m=application 9 DTLS/SCTP 5000\r\n" +
"c=IN IP4 0.0.0.0\r\n" +
"b=AS:30\r\n" +
"a=setup:passive\r\n" +
"a=mid:data\r\n" +
"a=ice-ufrag:adPg\r\n" +
"a=ice-pwd:Xsr05Mq8S7CR44DAnusZE26F\r\n" +
"a=fingerprint:sha-256 6A:39:DE:11:24:AD:2E:4E:63:D6:69:D3:85:05:53:C7:3C:38:A4:B7:91:74:C0:91:44:FC:94:63:7F:01:AB:A9\r\n" +
"a=sctpmap:5000 webrtc-datachannel 1024\r\n" +
"a=rtcp-mux\r\n";

// A basic sdp video mline with a single stream
var plainVideoMLineSdp = "" +
"m=video 9 RTP/SAVPF 100\r\n" +
"c=IN IP4 0.0.0.0\r\n" +
"a=rtpmap:100 VP8/90000\r\n" +
"a=rtcp:9 IN IP4 0.0.0.0\r\n" +
"a=rtcp-fb:100 ccm fir\r\n" +
"a=rtcp-fb:100 nack\r\n" +
"a=rtcp-fb:100 nack pli\r\n" +
"a=rtcp-fb:100 goog-remb\r\n" +
"a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\n" +
"a=setup:passive\r\n" +
"a=mid:video\r\n" +
"a=sendrecv\r\n" +
"a=ice-ufrag:adPg\r\n" +
"a=ice-pwd:Xsr05Mq8S7CR44DAnusZE26F\r\n" +
"a=fingerprint:sha-256 6A:39:DE:11:24:AD:2E:4E:63:D6:69:D3:85:05:53:C7:3C:38:A4:B7:91:74:C0:91:44:FC:94:63:7F:01:AB:A9\r\n" +
"a=ssrc:1757014965 msid:0836cc8e-a7bb-47e9-affb-0599414bc56d bdbd2c0a-7959-4578-8db5-9a6a1aec4ecf\r\n" +
"a=ssrc:1757014965 cname:peDGrDD6WsxUOki/\r\n" +
"a=rtcp-mux\r\n";

// An sdp video mline with 3 simulcast streams
var simulcastVideoMLineSdp = "" +
"m=video 9 RTP/SAVPF 100\r\n" +
"c=IN IP4 0.0.0.0\r\n" +
"a=rtpmap:100 VP8/90000\r\n" +
"a=rtcp:9 IN IP4 0.0.0.0\r\n" +
"a=rtcp-fb:100 ccm fir\r\n" +
"a=rtcp-fb:100 nack\r\n" +
"a=rtcp-fb:100 nack pli\r\n" +
"a=rtcp-fb:100 goog-remb\r\n" +
"a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\n" +
"a=setup:passive\r\n" +
"a=mid:video\r\n" +
"a=sendrecv\r\n" +
"a=ice-ufrag:adPg\r\n" +
"a=ice-pwd:Xsr05Mq8S7CR44DAnusZE26F\r\n" +
"a=fingerprint:sha-256 6A:39:DE:11:24:AD:2E:4E:63:D6:69:D3:85:05:53:C7:3C:38:A4:B7:91:74:C0:91:44:FC:94:63:7F:01:AB:A9\r\n" +
"a=ssrc:1757014965 msid:0836cc8e-a7bb-47e9-affb-0599414bc56d bdbd2c0a-7959-4578-8db5-9a6a1aec4ecf\r\n" +
"a=ssrc:1757014965 cname:peDGrDD6WsxUOki/\r\n" +
"a=ssrc:1479742055 msid:0836cc8e-a7bb-47e9-affb-0599414bc56d bdbd2c0a-7959-4578-8db5-9a6a1aec4ecf\r\n" +
"a=ssrc:1479742055 cname:peDGrDD6WsxUOki/\r\n" +
"a=ssrc:1089111804 msid:0836cc8e-a7bb-47e9-affb-0599414bc56d bdbd2c0a-7959-4578-8db5-9a6a1aec4ecf\r\n" +
"a=ssrc:1089111804 cname:peDGrDD6WsxUOki/\r\n" +
"a=ssrc-group:SIM 1757014965 1479742055 1089111804\r\n" +
"a=rtcp-mux\r\n";

// An sdp video mline with a single video stream and a
//  corresponding rtx stream
var rtxVideoMLineSdp = "" +
"m=video 9 RTP/SAVPF 100 96\r\n" +
"c=IN IP4 0.0.0.0\r\n" +
"a=rtpmap:100 VP8/90000\r\n" +
"a=fmtp:96 apt=100\r\n" +
"a=rtcp:9 IN IP4 0.0.0.0\r\n" +
"a=rtcp-fb:100 ccm fir\r\n" +
"a=rtcp-fb:100 nack\r\n" +
"a=rtcp-fb:100 nack pli\r\n" +
"a=rtcp-fb:100 goog-remb\r\n" +
"a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\n" +
"a=setup:passive\r\n" +
"a=mid:video\r\n" +
"a=sendrecv\r\n" +
"a=ice-ufrag:adPg\r\n" +
"a=ice-pwd:Xsr05Mq8S7CR44DAnusZE26F\r\n" +
"a=fingerprint:sha-256 6A:39:DE:11:24:AD:2E:4E:63:D6:69:D3:85:05:53:C7:3C:38:A4:B7:91:74:C0:91:44:FC:94:63:7F:01:AB:A9\r\n" +
"a=ssrc:1757014965 msid:0836cc8e-a7bb-47e9-affb-0599414bc56d bdbd2c0a-7959-4578-8db5-9a6a1aec4ecf\r\n" +
"a=ssrc:1757014965 cname:peDGrDD6WsxUOki/\r\n" +
"a=ssrc:984899560 msid:0836cc8e-a7bb-47e9-affb-0599414bc56d bdbd2c0a-7959-4578-8db5-9a6a1aec4ecf\r\n" +
"a=ssrc:984899560 cname:peDGrDD6WsxUOki/\r\n" +
"a=ssrc-group:FID 1757014965 984899560\r\n" +
"a=rtcp-mux\r\n";

// An sdp video mline with 3 simulcast streams and 3 rtx streams
var simulcastRtxVideoMLineSdp = "" +
"m=video 9 RTP/SAVPF 100 96\r\n" +
"c=IN IP4 0.0.0.0\r\n" +
"a=rtpmap:100 VP8/90000\r\n" +
"a=fmtp:96 apt=100\r\n" +
"a=rtcp:9 IN IP4 0.0.0.0\r\n" +
"a=rtcp-fb:100 ccm fir\r\n" +
"a=rtcp-fb:100 nack\r\n" +
"a=rtcp-fb:100 nack pli\r\n" +
"a=rtcp-fb:100 goog-remb\r\n" +
"a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\n" +
"a=setup:passive\r\n" +
"a=mid:video\r\n" +
"a=sendrecv\r\n" +
"a=ice-ufrag:adPg\r\n" +
"a=ice-pwd:Xsr05Mq8S7CR44DAnusZE26F\r\n" +
"a=fingerprint:sha-256 6A:39:DE:11:24:AD:2E:4E:63:D6:69:D3:85:05:53:C7:3C:38:A4:B7:91:74:C0:91:44:FC:94:63:7F:01:AB:A9\r\n" +
"a=ssrc:1757014965 msid:0836cc8e-a7bb-47e9-affb-0599414bc56d bdbd2c0a-7959-4578-8db5-9a6a1aec4ecf\r\n" +
"a=ssrc:1757014965 cname:peDGrDD6WsxUOki/\r\n" +
"a=ssrc:1479742055 msid:0836cc8e-a7bb-47e9-affb-0599414bc56d bdbd2c0a-7959-4578-8db5-9a6a1aec4ecf\r\n" +
"a=ssrc:1479742055 cname:peDGrDD6WsxUOki/\r\n" +
"a=ssrc:1089111804 msid:0836cc8e-a7bb-47e9-affb-0599414bc56d bdbd2c0a-7959-4578-8db5-9a6a1aec4ecf\r\n" +
"a=ssrc:1089111804 cname:peDGrDD6WsxUOki/\r\n" +
"a=ssrc:855213044 msid:0836cc8e-a7bb-47e9-affb-0599414bc56d bdbd2c0a-7959-4578-8db5-9a6a1aec4ecf\r\n" +
"a=ssrc:855213044 cname:peDGrDD6WsxUOki/\r\n" +
"a=ssrc:984899560 msid:0836cc8e-a7bb-47e9-affb-0599414bc56d bdbd2c0a-7959-4578-8db5-9a6a1aec4ecf\r\n" +
"a=ssrc:984899560 cname:peDGrDD6WsxUOki/\r\n" +
"a=ssrc:2963867077 msid:0836cc8e-a7bb-47e9-affb-0599414bc56d bdbd2c0a-7959-4578-8db5-9a6a1aec4ecf\r\n" +
"a=ssrc:2963867077 cname:peDGrDD6WsxUOki/\r\n" +
"a=ssrc-group:FID 1757014965 984899560\r\n" +
"a=ssrc-group:FID 1479742055 855213044\r\n" +
"a=ssrc-group:FID 1089111804 2963867077\r\n" +
"a=ssrc-group:SIM 1757014965 1479742055 1089111804\r\n" +
"a=rtcp-mux\r\n";

// A unified plan sdp with simulcast (from firefox v56)
var unifiedPlanSimulcastSdpStr = "" +
"v=0\r\n" + 
"o=mozilla...THIS_IS_SDPARTA-56.0a1 6304205476065638613 0 IN IP4 0.0.0.0\r\n" + 
"s=-\r\n" + 
"t=0 0\r\n" + 
"a=sendrecv\r\n" + 
"a=fingerprint:sha-256 78:B1:D8:02:64:FE:A9:02:62:9F:46:B9:C8:50:46:77:47:B8:ED:06:36:F1:9F:82:19:63:26:6E:D2:B0:80:39\r\n" + 
"a=group:BUNDLE audio-839698130 audio-4267235659 video-1207636486 video-2166032459 data\r\n" + 
"a=ice-options:trickle\r\n" + 
"a=msid-semantic:WMS *\r\n" + 
"m=audio 9 RTP/SAVPF 111 126\r\n" + 
"c=IN IP4 0.0.0.0\r\n" + 
"a=sendrecv\r\n" + 
"a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\n" + 
"a=fmtp:111 maxplaybackrate=48000;stereo=1;useinbandfec=1\r\n" + 
"a=fmtp:126 0-15\r\n" + 
"a=ice-pwd:051d8dcfda0ad8dc6aaa7ff8e59b58a8\r\n" + 
"a=ice-ufrag:cc7a1579\r\n" + 
"a=mid:audio-839698130\r\n" + 
"a=msid:{e0e4ce59-c87f-0e41-a674-eebbaeeb3b7a} {87da2462-ecb1-3745-82b9-86d350d9f1cf}\r\n" + 
"a=rtcp-mux\r\n" + 
"a=rtpmap:111 opus/48000/2\r\n" + 
"a=rtpmap:126 telephone-event/8000\r\n" + 
"a=setup:active\r\n" + 
"a=ssrc:3309126484 cname:{61c88cfd-56e0-dc41-b3ea-ffb77380a8d9}\r\n" + 
"m=audio 9 RTP/SAVPF 111 126\r\n" + 
"c=IN IP4 0.0.0.0\r\n" + 
"a=recvonly\r\n" + 
"a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\n" + 
"a=fmtp:111 maxplaybackrate=48000;stereo=1;useinbandfec=1\r\n" + 
"a=fmtp:126 0-15\r\n" + 
"a=ice-pwd:051d8dcfda0ad8dc6aaa7ff8e59b58a8\r\n" + 
"a=ice-ufrag:cc7a1579\r\n" + 
"a=mid:audio-4267235659\r\n" + 
"a=rtcp-mux\r\n" + 
"a=rtpmap:111 opus/48000/2\r\n" + 
"a=rtpmap:126 telephone-event/8000\r\n" + 
"a=setup:active\r\n" + 
"a=ssrc:3180151989 cname:{61c88cfd-56e0-dc41-b3ea-ffb77380a8d9}\r\n" + 
"m=video 9 RTP/SAVPF 100\r\n" + 
"c=IN IP4 0.0.0.0\r\n" + 
"a=sendrecv\r\n" + 
"a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\n" + 
"a=extmap:4 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id\r\n" + 
"a=fmtp:100 max-fs=12288;max-fr=60\r\n" + 
"a=ice-pwd:051d8dcfda0ad8dc6aaa7ff8e59b58a8\r\n" + 
"a=ice-ufrag:cc7a1579\r\n" + 
"a=mid:video-1207636486\r\n" + 
"a=msid:{1c831318-c183-6841-8eee-c4d5cf2b396e} {98793862-d2fb-3a48-bea1-84b2636fcc33}\r\n" + 
"a=rid:1 send\r\n" + 
"a=rid:2 send\r\n" + 
"a=rid:3 send\r\n" + 
"a=rtcp-fb:100 nack\r\n" + 
"a=rtcp-fb:100 nack pli\r\n" + 
"a=rtcp-fb:100 ccm fir\r\n" + 
"a=rtcp-fb:100 goog-remb\r\n" + 
"a=rtcp-mux\r\n" + 
"a=rtpmap:100 VP8/90000\r\n" + 
"a=setup:active\r\n" + 
"a=simulcast: send rid=1;2;3\r\n" + 
"a=ssrc:1359670181 cname:{61c88cfd-56e0-dc41-b3ea-ffb77380a8d9}\r\n" + 
"a=ssrc:1571309374 cname:{61c88cfd-56e0-dc41-b3ea-ffb77380a8d9}\r\n" + 
"a=ssrc:2006842176 cname:{61c88cfd-56e0-dc41-b3ea-ffb77380a8d9}\r\n" + 
"m=video 9 RTP/SAVPF 100\r\n" + 
"c=IN IP4 0.0.0.0\r\n" + 
"a=recvonly\r\n" + 
"a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\n" + 
"a=fmtp:100 max-fs=12288;max-fr=60\r\n" + 
"a=ice-pwd:051d8dcfda0ad8dc6aaa7ff8e59b58a8\r\n" + 
"a=ice-ufrag:cc7a1579\r\n" + 
"a=mid:video-2166032459\r\n" + 
"a=rtcp-fb:100 nack\r\n" + 
"a=rtcp-fb:100 nack pli\r\n" + 
"a=rtcp-fb:100 ccm fir\r\n" + 
"a=rtcp-fb:100 goog-remb\r\n" + 
"a=rtcp-mux\r\n" + 
"a=rtpmap:100 VP8/90000\r\n" + 
"a=setup:active\r\n" + 
"a=ssrc:3546457276 cname:{61c88cfd-56e0-dc41-b3ea-ffb77380a8d9}\r\n" + 
"m=application 9 DTLS/SCTP 5000\r\n" + 
"c=IN IP4 0.0.0.0\r\n" + 
"a=sendrecv\r\n" + 
"a=ice-pwd:051d8dcfda0ad8dc6aaa7ff8e59b58a8\r\n" + 
"a=ice-ufrag:cc7a1579\r\n" + 
"a=mid:data\r\n" + 
"a=rtcp-mux\r\n" + 
"a=sctpmap:5000 webrtc-datachannel 256\r\n" + 
"a=setup:active\r\n";

// A full sdp string representing a client doing simulcast
var simulcastSdpStr = baseSessionSdp + baseAudioMLineSdp + simulcastVideoMLineSdp + baseDataMLineSdp;
// A full sdp string representing a client doing simulcast and rtx
var simulcastRtxSdpStr = baseSessionSdp + baseAudioMLineSdp + simulcastRtxVideoMLineSdp + baseDataMLineSdp;
// A full sdp string representing a client doing a single video stream
var plainVideoSdpStr = baseSessionSdp + baseAudioMLineSdp + plainVideoMLineSdp + baseDataMLineSdp;
// A full sdp string representing a client doing a single video stream with rtx
var rtxVideoSdpStr = baseSessionSdp + baseAudioMLineSdp + rtxVideoMLineSdp + baseDataMLineSdp;

exports.simulcastSdp = simulcastSdpStr;
exports.simulcastRtxSdp = simulcastRtxSdpStr;
exports.plainVideoSdp = plainVideoSdpStr;
exports.rtxVideoSdp = rtxVideoSdpStr;
exports.unifiedPlanSimulcastSdp = unifiedPlanSimulcastSdpStr;
