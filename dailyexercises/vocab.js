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
  }
];