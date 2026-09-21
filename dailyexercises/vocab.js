const scrambledVocabularyTerms = [
  {
    "Term": "RnJxbXhxZncgUHJ3bHJx",
    "Definition": "VnBycndrIHlybGZoIG9oZGdscWosIHh2eGRvb2IgZWIgdndocw=="
  },
  {
    "Term": "R2x2bXhxZncgUHJ3bHJx",
    "Definition": "WXJsZmggb2hkZ2xxaiBma2R1ZGZ3aHVsY2hnIGViIG9kdWpoIG9oZHN2"
  },
  {
    "Term": "VmZkb2g=",
    "Definition": "V2toIHFyd2h2IHJpIGQgamx5aHEgbmhiLCBkdmZocWdscWogZHFnIGdodmZocWdscWo="
  },
  {
    "Term": "UGRtcnUgVmZkb2g=",
    "Definition": "MSwgMiwgMywgNCwgNSwgNiwgNywgOA=="
  },
  {
    "Term": "UWR3eHVkbyBQbHFydSBWZmRvaA==",
    "Definition": "MSwgMizima0zLCA0LCA1LOKZrTYs4pmtNywgOA=="
  },
  {
    "Term": "S2R1cHJxbGYgUGxxcnUgVmZkb2g=",
    "Definition": "MSwgMizima0zLCA0LCA1LOKZrTYs4pmuNywgOA=="
  },
  {
    "Term": "UGhvcmdsZiBQbHFydSBWZmRvaA==",
    "Definition": "MSwgMizima0zLCA0LCA1LOKZrjYs4pmuNywgOCDihpfvuI4g4pmtNyzima02LCA1LCA0LOKZrTMsIDIsIDEg4oaY77iO"
  },
  {
    "Term": "U2hxd2R3cnFsZiBWZmRvaA==",
    "Definition": "RCB2ZmRvaCBycW9iIHh2bHFqIDUgcXJ3aHYsIHBkbXJ1IHJ1IHBscXJ1"
  },
  {
    "Term": "Rmt1cnBkd2xmIFZmZG9o",
    "Definition": "RCB2ZmRvaCB4d2xvbGNscWogZG9vIDEyIHFyd2h2"
  },
  {
    "Term": "Wmtyb2ggV3JxaCBWZmRvaA==",
    "Definition": "RCB2ZmRvaCBmcnBzdWx2aGcgcnFvYiByaSB6a3JvaCB2d2hzdg=="
  },
  {
    "Term": "VWhvZHdseWggUGxxcnU=",
    "Definition": "RCBwbHFydSB2ZmRvaCB3a2R3IHh2aHYgd2toIHZkcGggbmhiIHZsanFkd3h1aCBkdiB3a2ggcGRtcnUgKEYgcGRtcnUsIEQgcGxxcnUp"
  },
  {
    "Term": "U2R1ZG9vaG8gUGxxcnU=",
    "Definition": "RCBwbHFydSB2ZmRvaCB3a2R3IHZrZHVodiB3a2ggdmRwaCB3cnFsZiBkdiB3a2ggcGRtcnUgKEYgcGRtcnUsIEYgcGxxcnUp"
  },
  {
    "Term": "RGZmbGdocXdkbw==",
    "Definition": "UGR1bmxxanYgbHEgd2toIHB4dmxmIHdrZHcgZG93aHUgd2toIHNsd2ZrIHJpIGQgcXJ3aA=="
  },
  {
    "Term": "VmtkdXM=",
    "Definition": "VWRsdmh2IGQgcWR3eHVkbyBzbHdmayBlYiBycWgga2RvaSB2d2hz"
  },
  {
    "Term": "SW9kdw==",
    "Definition": "T3J6aHV2IGQgcWR3eHVkbyBzbHdmayBlYiBycWgga2RvaSB2d2hz"
  },
  {
    "Term": "R3J4ZW9oIFZrZHVz",
    "Definition": "VWRsdmh2IGQgcWR3eHVkbyBzbHdmayBlYiB3enIga2RvaSB2d2hzdg=="
  },
  {
    "Term": "R3J4ZW9oIElvZHc=",
    "Definition": "T3J6aHV2IGQgcWR3eHVkbyBzbHdmayBlYiB3enIga2RvaSB2d2hzdg=="
  },
  {
    "Term": "UWR3eHVkbw==",
    "Definition": "VWh3eHVxdiBkIHFyd2ggd3IgbHcndiBxZHd4dWRvIHZ3ZHdoLCBmZHFmaG9scWogZHFiIGRmZmxnaHF3ZG92"
  },
  {
    "Term": "SHFrZHVwcnFsZg==",
    "Definition": "RHEgZG93aHVxZHdoIHZzaG9vbHFqIHJpIGQgcXJ3aCAobC5oLiBGIy9HZSk="
  },
  {
    "Term": "VndkaWk=",
    "Definition": "V2toIGlseWggb2xxaHYgYnJ4IHp1bHdoIHB4dmxmIHJx"
  },
  {
    "Term": "V3VoZW9oIEZvaGk=",
    "Definition": "SiBmb2hpLCB3a2ggdmJwZXJvIHVoc3Vodmhxd2xxaiB3a2ggeHNzaHUgdWhqbHZ3aHU="
  },
  {
    "Term": "RWR2diBGb2hp",
    "Definition": "SSBmb2hpLCB3a2ggdmJwZXJvIHVoc3Vodmhxd2xxaiB3a2ggb3J6aHUgdWhqbHZ3aHU="
  },
  {
    "Term": "T2hnamh1IE9scWh2",
    "Definition": "VmtydXcgb2xxaHYgenVsd3docSBkZXJ5aCBkcWcgZWhvcnogd2toIHZ3ZGlp"
  },
  {
    "Term": "Tmhi",
    "Definition": "V2toIHZmZG9oIHh2aGcgbHEgZCBzbGhmaCByaSBweHZsZg=="
  },
  {
    "Term": "TmhiIFZsanFkd3h1aA==",
    "Definition": "V2toIHZodyByaSB2a2R1c3YgZHFnIGlvZHd2IHprbGZrIGdod2h1cGxxaCB3a2ggbmhi"
  },
  {
    "Term": "VnJvaWhqaA==",
    "Definition": "R3IsIFVoLCBQbCwgaHdmLg=="
  },
  {
    "Term": "Vm94dQ==",
    "Definition": "RCBmeHV5aGcgb2xxaCBlaHd6aGhxIHd6ciBnbGlpaHVocXcgc2x3ZmtodiwgbHFnbGZkd2xxaiB3a2R3IHdraGIgdmtyeG9nIGVoIHNvZGJoZyBvaGpkd3I="
  },
  {
    "Term": "V2xo",
    "Definition": "RCBmeHV5aGcgb2xxaCBlaHd6aGhxIHd6ciBxcndodiByaSB3a2ggdmRwaCBzbHdmaywgZGdnbHFqIHdraGx1IG9ocWp3a3Ygd3JqaHdraHU="
  },
  {
    "Term": "VWtid2tw",
    "Definition": "V2toIHpkYiByaSBydWpkcWxjbHFqIHFyd2h2IGViIG9ocWp3aw=="
  },
  {
    "Term": "UGhkdnh1aA==",
    "Definition": "V2toIHZzZGZoIGVod3poaHEgd3pyIHlodXdsZmRvIGVkdSBvbHFodg=="
  },
  {
    "Term": "V2xwaCBWbGpxZHd4dWg=",
    "Definition": "RCBwZHVubHFqIHdrZHcgZ2h2ZnVsZWh2IHdraCBxeHBlaHUgcmkgZWhkd3YgbHEgZCBwaGR2eHVoIGRxZyBrcnogd2toYiBkdWggdnhlZ2x5bGdoZw=="
  },
  {
    "Term": "UGh3aHU=",
    "Definition": "RHFyd2todSB6ZGIgd3IgdmRiIFdscGggVmxqcWR3eHVo"
  },
  {
    "Term": "Vmxwc29oIFBod2h1",
    "Definition": "RWhkdyBsdiBnbHlsdmxlb2ggZWIganVyeHN2IHJpIHd6cg=="
  },
  {
    "Term": "RnJwc3J4cWcgUGh3aHU=",
    "Definition": "RWhkdyBsdiBnbHlsdmxlb2ggZWIganVyeHN2IHJpIHdrdWho"
  },
  {
    "Term": "RnJwc29oYSBQaHdodQ==",
    "Definition": "VnJwaCBlaGR3diBkdWggZ2x5bHZsZW9oIGViIHd6ciwgdnJwaCBlYiB3a3VoaCAoZHZicHBod3VsZik="
  },
  {
    "Term": "V3JxbGY=",
    "Definition": "VmZkb2ggR2hqdWhoIEwsIGdyLXBsLXZybw=="
  },
  {
    "Term": "VnhzaHV3cnFsZg==",
    "Definition": "VmZkb2ggR2hqdWhoIGxsLCB1aC1pZC1vZA=="
  },
  {
    "Term": "UGhnbGRxdw==",
    "Definition": "VmZkb2ggR2hqdWhoIGxsbCwgcGwtdnJvLWFs"
  },
  {
    "Term": "VnhlZ3JwbHFkcXc=",
    "Definition": "VmZkb2ggR2hqdWhoIExZLCBpZC1vZC1ncg=="
  },
  {
    "Term": "R3JwbHFkcXc=",
    "Definition": "VmZkb2ggR2hqdWhoIFksIHZyby1hbC11aA=="
  },
  {
    "Term": "VnhlcGhnbGRxdw==",
    "Definition": "VmZkb2ggR2hqdWhoIHlsLCBvZC1nci1wbA=="
  },
  {
    "Term": "T2hkZ2xxaiBXcnFo",
    "Definition": "VmZkb2ggR2hqdWhoIHlsbMK6LCBhbC11aC1pZA=="
  },
  {
    "Term": "V2hwc3I=",
    "Definition": "V2toIHZzaGhnIHJpIHB4dmxm"
  },
  {
    "Term": "RVNQ",
    "Definition": "V2toIHF4cGVodSByaSBlaGR3diBzaHUgcGxxeHdo"
  },
  {
    "Term": "VWx3ZHVnZHFncg==",
    "Definition": "V3IganVkZ3hkb29iIGdoZnVoZHZoIGxxIHZzaGhn"
  },
  {
    "Term": "RGZmaG9odWRxZ3I=",
    "Definition": "V3IganVkZ3hkb29iIGxxZnVoZHZoIGxxIHZzaGhn"
  },
  {
    "Term": "RCBXaHBzcg==",
    "Definition": "V3IgdWh3eHVxIHdyIHdraCBydWxqbHFkbyB3aHBzciAoZGl3aHUgdWx3L2RmZmhvKQ=="
  },
  {
    "Term": "VXhlZHdy",
    "Definition": "V3IgZWggc29kYmhnIHpsd2sgaXVoaCB3aHBzcg=="
  },
  {
    "Term": "T2R1anIvT2hxd3I=",
    "Definition": "WWh1YiB2b3J6LCA0MC02MCBFU1A="
  },
  {
    "Term": "RGdkamxy",
    "Definition": "Vm9yem9iLCB6bHdrIGhhc3VodnZscnEsIDYwLTc1IEVTUA=="
  },
  {
    "Term": "RHFnZHF3aA==",
    "Definition": "WmRvbmxxaiB3aHBzciwgNzUtOTAgRVNQ"
  },
  {
    "Term": "UHJnaHVkd3I=",
    "Definition": "RHcgZCBwcmdodWR3aCB2c2hoZywgMTAwLTEyMCBFU1A="
  },
  {
    "Term": "RG9vaGp1cg==",
    "Definition": "SWR2dywgMTIwLTE0MCBFU1A="
  },
  {
    "Term": "WWx5ZGZo",
    "Definition": "T2x5aG9iIGRxZyBpZHZ3LCAxNTAtMTc1IEVTUA=="
  },
  {
    "Term": "U3Vodndy",
    "Definition": "WWh1YiBpZHZ3LCAxNDAtMjAwIEVTUA=="
  },
  {
    "Term": "VmJxZnJzZHdscnE=",
    "Definition": "UHh2bGYvdWtid2twdiB3a2R3IGRmZmhxdyB3a2ggeHNlaGR3diByaSBkIHNrdWR2aA=="
  },
  {
    "Term": "R3J6cWVoZHc=",
    "Definition": "V2toIGVoamxxcWxxai92d3VycWpodncgc2R1dyByaSB3a2ggZWhkdw=="
  },
  {
    "Term": "WHNlaGR3",
    "Definition": "V2toIHpoZG5odSB2eGVnbHlsdmxycSh2KSBlaHd6aGhxIHdraCBlaGR3dg=="
  },
  {
    "Term": "R3hzb2ggU3hvdmg=",
    "Definition": "V2xwaCB2bGpxZHd4dWggemx3ayB3enIgcGRscSBlaGR3dg=="
  },
  {
    "Term": "V3Vsc29oIFN4b3Zo",
    "Definition": "V2xwaCB2bGpxZHd4dWggemx3ayB3a3VoaCBwZGxxIGVoZHd2"
  },
  {
    "Term": "VHhkZ3V4c29oIFN4b3Zo",
    "Definition": "V2xwaCB2bGpxZHd4dWggemx3ayBpcnh1IHBkbHEgZWhkd3Y="
  },
  {
    "Term": "U2h1aWhmdyBYcWx2cnE=",
    "Definition": "UXIgZ2x2d2RxZmggZWh3emhocSB3a2ggc2x3Zmtodjsgd2toIHZkcGggcXJ3aA=="
  },
  {
    "Term": "U2h1aWhmdyBSZndkeWg=",
    "Definition": "V3pob3loIGtkb2kgdndoc3YgZWh3emhocSB3a2ggc2x3ZmtodiwgdnNkZmggcmkgOCBxcndodg=="
  },
  {
    "Term": "V2xwZXVo",
    "Definition": "V2toIHR4ZG9sd2IgcnUgd3JxaCBmcm9ydSByaSBkIHZyeHFn"
  },
  {
    "Term": "SXhxZndscnE=",
    "Definition": "V2toIHZzaGZsaWxmIHVyb2ggKG1yZSkgd2tkdyBkIGZrcnVnIHNvZGJ2"
  },
  {
    "Term": "UHJ3bHlo",
    "Definition": "RCBweHZsZmRvIGxnaGQsIHNsaGZoIHJpIHBob3JnYiB3a2R3IGx2IGxwc3J1d2RxdyB3ciB3a2ggdnJxaiBkdiBkIHprcm9o"
  },
  {
    "Term": "RHFkZnV4dmx2",
    "Definition": "RCBzbGZueHMgcXJ3aCB3a2R3IHZ3ZHV3diBlaGlydWggd2toIGVoamxxcWxxaiByaSBkIHNrdWR2aA=="
  },
  {
    "Term": "RnJxd3J4dQ==",
    "Definition": "V2toIHZrZHNoIHJpIGQgamx5aHEgcGhvcmdiIHJ1IHNrdWR2aA=="
  },
  {
    "Term": "RG9laHV3bCBFZHZ2",
    "Definition": "V2toIHN1ZGZ3bGZoIHJpIGR1c2hqamxkd2xxaiB3a2ggZmtydWd2IHhxZ2h1IHdraCBwZGxxIHBob3JnYg=="
  },
  {
    "Term": "RnJ4cXdodXBob3JnYg==",
    "Definition": "RCB2aGZycWdkdWIgcGhvcmdiIHdrZHcgZGZmcnBzZHFsaHYgd2toIHBkbHEgcnFo"
  },
  {
    "Term": "S2R1cHJxYg==",
    "Definition": "V2toIGpocWh1ZG8gZnJxZmhzdyB3a2R3IGdodmZ1bGVodiB3a2ggemRiIHFyd2h2IHZyeHFnIHdyamh3a2h1"
  },
  {
    "Term": "RHVzaGpqbHI=",
    "Definition": "U29kYmxxaiBkIGZrcnVnIHJxaCBxcndoIGR3IGQgd2xwaCBscXZ3aGRnIHJpIGRvbyBkdyBycWZo"
  },
  {
    "Term": "RGZmcnBzZHFscGhxdw==",
    "Definition": "RCBweHZsZmRvIHNkdXcgcmkgb2h2dmh1IGxwc3J1d2RxZmgsIHBydndvYiB2aHV5bHFqIHdyIGpseWggd2toIGtkdXBycWI="
  },
  {
    "Term": "UnVma2h2d3Vkd2xycQ==",
    "Definition": "V2toIHZob2hmd2xycSByaSBscXZ3dXhwaHF3diB3a2R3IHNvZGIgZCBzZHV3bGZ4b2R1IHNkdXcgKGxxdnd1eHBocXdkd2xycSk="
  },
  {
    "Term": "U2t1ZHZo",
    "Definition": "RCB2a3J1dyB2aGpwaHF3IHJpIHB4dmxmIHpsd2sgZCBmb2hkdW9iIGdoaWxxaGcgZWhqbHFxbHFqIGRxZyBocWc="
  },
  {
    "Term": "UGRodndydnI=",
    "Definition": "V3IgZWggc29kYmhnIHBkbWh2d2xmZG9vYiwgZWIgZGZmaHF3bHFqIGh5aHViIHFyd2ggKGVyeHFmYik="
  },
  {
    "Term": "Sm9sdnZkcWdy",
    "Definition": "V3IgdHhsZm5vYiB2b2xnaCBpdXJwIGQgb3J6IHFyd2ggd3IgZCBrbGprIHFyd2gsIHJ1IHlsZmggeWh1dmQ="
  },
  {
    "Term": "UmZ3ZHdycWxmIFZmZG9o",
    "Definition": "RCB2ZmRvaCB4dmxxaiA4IHFyd2h2LCBnbHBscWx2a2hnIHZmZG9odg=="
  },
  {
    "Term": "RHZmaHFn",
    "Definition": "V3IganIgeHM="
  },
  {
    "Term": "R2h2ZmhxZw==",
    "Definition": "V3IganIgZ3J6cQ=="
  },
  {
    "Term": "THBzdXJ5bHZkd2xycQ==",
    "Definition": "RnJwaCB4cyB6bHdrIHFoeiBwaG9yZ2xodiwgdnJvcnYsIGh3Zi4gcnEgd2toIHZzcnc="
  },
  {
    "Term": "R2x2dnJxZHFmaA==",
    "Definition": "RCB2cnhxZyByaSBmb2R2a2xxaiBzdXJneGZoZyBlYiBmcnFpb2xmd2xxaiBxcndodg=="
  },
  {
    "Term": "RnJxdnJxZHFmaA==",
    "Definition": "V2toIHJzc3J2bHdoIHJpIGdsdnZycWRxZmgsIHNvaGR2ZHF3IHZyeHFndg=="
  },
  {
    "Term": "V2hhd3h1aA==",
    "Definition": "V2toIHpkYiBscSB6a2xmayBweHZsZmRvIGZycXdocXcgbHYgc3Vodmhxd2hn"
  },
  {
    "Term": "UHJxcnNrcnFsZg==",
    "Definition": "RCBweHZsZmRvIHdoYXd4dWggZnJxdmx2d2xxaiByaSBkIHZscWpvaCBwaG9yZ2IsIGxpIHB4b3dsc29oIHlybGZodiwgdnhxaiBscSB4cWx2cnE="
  },
  {
    "Term": "S3JwcnNrcnFsZg==",
    "Definition": "RCBweHZsZmRvIHdoYXd4dWggZnJxdmx2d2xxaiByaSBkIHBkbHEgcGhvcmdiIGRxZyBrZHVwcnFiIHJpIG9odnZodSBscHNydXdkcWZo"
  },
  {
    "Term": "U3JvYnNrcnFsZg==",
    "Definition": "RCBweHZsZmRvIHdoYXd4dWggeHZscWogcHhvd2xzb2ggcGhvcmdsaHYsIGhkZmsgemx3ayB2aHBsLWh0eGRvIGxwc3J1d2RxZmg="
  },
  {
    "Term": "S2h3aHVyc2tycWxm",
    "Definition": "RCBweHZsZmRvIHdoYXd4dWggcmkgZCBwaG9yZ2Igd2tkdyBsdiBncnhlb2hnIGV4dyB6bHdrIHZvbGprdyB5ZHVsZHdscnF2"
  },
  {
    "Term": "VnJvcg==",
    "Definition": "RCBzaHVpcnVwZHFmaCBlYiBkIHZscWpvaCBweHZsZmxkcQ=="
  },
  {
    "Term": "R3hodw==",
    "Definition": "V3pyIHB4dmxmbGRxdiBzaHVpcnVwbHFqIHdyamh3a2h1"
  },
  {
    "Term": "V3Vscg==",
    "Definition": "V2t1aGggcHh2bGZsZHF2IHNodWlydXBscWogd3JqaHdraHU="
  },
  {
    "Term": "VHhkdXdodw==",
    "Definition": "SXJ4dSBQeHZsZmxkcXYgc2h1aXJ1cGxxaiB3cmpod2todQ=="
  },
  {
    "Term": "VnJzdWRxcg==",
    "Definition": "V2toIHhzc2h1IGlocGRvaCB5cmxmaA=="
  },
  {
    "Term": "RG93cg==",
    "Definition": "V2toIG9yemh1IGlocGRvaCB5cmxmaA=="
  },
  {
    "Term": "V2hxcnU=",
    "Definition": "V2toIHhzc2h1IHBkb2ggeXJsZmg="
  },
  {
    "Term": "RWR2dg==",
    "Definition": "V2toIG9yemh1IHBkb2ggeXJsZmg="
  },
  {
    "Term": "V3VkcXZzcnZo",
    "Definition": "V3IgcHJ5aCBkb28gd2toIHFyd2h2IHJpIGQgdnJxaiB4cyBydSBncnpx"
  },
  {
    "Term": "R2xmd2R3bHJx",
    "Definition": "V3IgenVsd2ggZ3J6cSBkIGpseWhxIHBob3JnYiBydSBrZHVwcnFi"
  },
  {
    "Term": "R2xkd3JxbGY=",
    "Definition": "RmtydWd2IHJ1IHFyd2h2IHdrZHcgaWRvbyB6bHdrbHEgd2toIHZmZG9o"
  },
  {
    "Term": "UXJxLUdsZHdycWxm",
    "Definition": "RmtydWd2IHJ1IHFyd2h2IHdrZHcgaWRvbyByeHd2bGdoIHJpIHdraCB2ZmRvaA=="
  },
  {
    "Term": "UGhvbHZwZHdsZg==",
    "Definition": "V3IgdmxxaiBycWggdmJvb2Rlb2ggemx3ayBwZHFiIHFyd2h2"
  },
  {
    "Term": "VmJvb2RlbGY=",
    "Definition": "V3IgdmxxaiBycWggcXJ3aCBzaHUgdmJvb2Rlb2g="
  },
  {
    "Term": "RnVydnYgVWtid2tw",
    "Definition": "RHEgcnlodW9kc3NscWogcmkgZ2xpaWh1aHF3IHVrYndrcHYgLyBnbHlsdmxycXYgcmkgd2toIGVoZHc="
  },
  {
    "Term": "S2hwbHJvZA==",
    "Definition": "THEgZCAzLzQgdmhmd2xycSByaSBweHZsZiwgZCB1a2J3a3BsZiBqdXJ4c2xxaiByaSAyLiBTdXJ5bGdodiB1a2J3a3BsZiB3aHF2bHJxLg=="
  },
  {
    "Term": "RnJwc3J4cWcgTHF3aHV5ZG8=",
    "Definition": "RHEgbHF3aHV5ZG8gd2tkdyBsdiBvZHVqaHUgd2tkcSBkcSByZndkeWg="
  },
  {
    "Term": "UnZ3bHFkd3I=",
    "Definition": "RCB1aHNoZHdoZyBweHZsZmRvIHNrdWR2aA=="
  },
  {
    "Term": "RmRxcnE=",
    "Definition": "RCBzcm9ic2tycWxmIHdoYXd4dWggZnVoZHdoZyBlYiBzb2RibHFqL3ZscWpscWogd2toIHZkcGggcGhvcmdiIGR3IGdsaWlodWhxdyB3bHBodg=="
  }
];