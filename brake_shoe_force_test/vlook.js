/*------------------ Seccion General Info------------------- */

function mostrarInfo() {
    const car_type = {
        'covered_hopper': 1,
        'cement_hopper': 1,
        'grain_hopper': 1,
        'open_top_hopper': 1,
        'aggregate_hopper': 1,
        'aggr_hopp_w_platform': 1,
        'pressure_differential': 1,
        'plastic_pellet': 1,
        'coal_bottom_manual': 1,
        'coal_rd_bottom_auto': 1,
        'coal_gon_combo': 1,
        'coal_gon_rotary_only': 1,
        'coil_gon': 1,
        'gondola_low_side': 1,
        'gondola_high_side': 1,
        'flat_high_bulkhead': 1,
        'flat_low_bulkhead': 1,
        'flat_military': 1,
        'flat_gen_purpose': 1,
        'specialty_flat': 1,
        'flat_rack_to_be_applied': 1,
        'autorack': 1,
        'automax_2_unit': 2,
        'std_alone_well_end_hb': 1,
        'std_alone_well_side_hb': 1,
        'double_stk_2_side_hb': 2,
        'double_stk_3_end_hb': 3,
        'double_stk_3_side_hb': 3,
        'double_stk_5_end_hb': 5,
        'double_stk_5_side_hb': 5,
        'box': 1,
        'refrigerator': 1,
        'tank_end_ladder': 1,
        'tank_side_ladder': 1,
        'pres_tank_end_ladder': 1,
        'pres_tank_side_ladder': 1,
        'spine_end_hb': 1,
        'spine_side_hb': 1
    };

    const s_2044_map = {
        'covered_hopper': 2,
        'cement_hopper': 2,
        'grain_hopper': 2,
        'open_top_hopper': 10,
        'aggregate_hopper': 10,
        'aggr_hopp_w_platform': 12,
        'pressure_differential': 2,
        'plastic_pellet': 2,
        'coal_bottom_manual': 10,
        'coal_rd_bottom_auto': 10,
        'coal_gon_combo': 10,
        'coal_gon_rotary_only': 10,
        'coil_gon': 14,
        'gondola_low_side': 11,
        'gondola_high_side': 10,
        'flat_high_bulkhead': 3,
        'flat_low_bulkhead': 11,
        'flat_military': 7,
        'flat_gen_purpose': 4,
        'specialty_flat': 4,
        'flat_rack_to_be_applied': 4,
        'autorack': 15,
        'automax_2_unit': 15,
        'std_alone_well_end_hb': 6,
        'std_alone_well_side_hb': 5,
        'double_stk_2_side_hb': 5,
        'double_stk_3_end_hb': 6,
        'double_stk_3_side_hb': 5,
        'double_stk_5_end_hb': 6,
        'double_stk_5_side_hb': 5,
        'box': 1,
        'refrigerator': 1,
        'tank_end_ladder': 9,
        'tank_side_ladder': 8,
        'pres_tank_end_ladder': 9,
        'pres_tank_side_ladder': 8,
        'spine_end_hb': 6,
        'spine_side_hb': 5
        
    };

    const final_map = {
        '1': 'A1',
        '2': 'B1',
        '3': 'C1',
        '4': 'D1',
        '5': 'D2',
        '6': 'D3',
        '7': 'D4',
        '8': 'E1',
        '9': 'E2',
        '10': 'F1',
        '11': 'F2',
        '12': 'F3',
        '13': 'F4',
        '14': 'G1',
        '15': 'H1',
        '16': 'J1'
    };

    const selectCar_type = document.getElementById('car_type');
    const number_of_units2 = document.getElementById('number_of_units2');
    const label_s_2044 = document.getElementById('s-2044');
    const car_typeSeleccionada = selectCar_type.value;

    if (car_typeSeleccionada) {
        number_of_units2.textContent = `${car_type[car_typeSeleccionada]}`;
    } else {
        number_of_units2.textContent = '';
    }

    if (car_typeSeleccionada) {
        const intermediateValue = s_2044_map[car_typeSeleccionada];
        label_s_2044.textContent = `${final_map[intermediateValue]}`;
    } else {
        label_s_2044.textContent = '';
    }
}

function calcularDiferencia() {
    const carSeriesStart = document.getElementById('car_series_start').value;
    const carSeriesEnd = document.getElementById('car_series_end').value;

    if (carSeriesStart && carSeriesEnd) {
        const diferencia = carSeriesEnd - carSeriesStart + 1;

        if (diferencia < 0) {
            document.getElementById('resultado').textContent = 'Revisa tus cantidades';
        } else {
            document.getElementById('resultado').textContent = diferencia;
        }
    } else {
        document.getElementById('resultado').textContent = '';
    }
}

function calcularSuma() {
    const lightweight = document.getElementById('lightweight').value;
    const loadLimit = document.getElementById('load_limit').value;

    if (lightweight && loadLimit) {
        const suma = parseFloat(lightweight) + parseFloat(loadLimit);
        document.getElementById('car_cap').textContent = suma;
    } else {
        document.getElementById('car_cap').textContent = '';
    }
}


/*------------------ Seccion de Slack Adjuster End Truck------------------- */



function mostrar() { /* id="modelEt" label Model */
    const modelEt = {
        '2000-DJ': 'Amsted',
        '2000-1-DJ': 'Amsted',
        '7100-21': 'Amsted',
        '7100-22': 'Amsted',
        '7100-22R': 'Amsted',
        '7100-22RS': 'Amsted',
        '7100-25': 'Amsted',
        '7100-25R': 'Amsted',
        '7100-26': 'Amsted',
        '7100-26R': 'Amsted',
        '7100-26RS': 'Amsted',
        '7100-28': 'Amsted',
        '7100-28R': 'Amsted',
        '7100-35': 'Amsted',
        '7100-40': 'Amsted',
        'IBEX': 'Amsted',
        '9100-12': 'Amsted',
        '9100-DJ': 'Amsted',
        '2300-DJ': 'Universal (Wab)',
        '2500-DJ': 'Universal (Wab)',
        '10, 10S': 'Universal (Wab)',
        'C-1000-DJ': 'Universal (Wab)',
        '4': 'Universal (Wab)',
        '5': 'Universal (Wab)',
        '5D': 'Universal (Wab)',
        '85A': 'Universal (Wab)',
        'KRD-482-E': 'NYAB',
        'KRD-482-R': 'NYAB',
        '790196': 'NYAB',
        '790240': 'NYAB',
        'DRV 2-101KDJ': 'American SAB',
        'DRV 2-1-USA-DJ': 'American SAB',
        'DRV 2USA-DJ': 'American SAB'
    };

    const slack_group = {
        '2000-DJ': 'E/R',
        '2000-1-DJ': 'E/R',
        '7100-21': 'L',
        '7100-22': 'N',
        '7100-22R': 'N',
        '7100-22RS': 'N',
        '7100-25': 'N',
        '7100-25R': 'N',
        '7100-26': 'N',
        '7100-26R': 'N',
        '7100-26RS': 'N',
        '7100-28': 'N',
        '7100-28R': 'N',
        '7100-35': 'Q',
        '7100-40': 'M',
        'IBEX': 'na',
        '9100-12': 'K',
        '9100-DJ': 'J',
        '2300-DJ': 'E',
        '2500-DJ': 'R',
        '10, 10S': 'K',
        'C-1000-DJ': 'O',
        '4': 'J',
        '5': 'L',
        '5D': 'M',
        '85A': 'P',
        'KRD-482-E': 'E',
        'KRD-482-R': 'R',
        '790196': 'R',
        '790240': 'R',
        'DRV 2-101KDJ': 'J',
        'DRV 2-1-USA-DJ': 'E',
        'DRV 2USA-DJ': 'E',
       
    };


    const slack_type = {
    '2000-DJ': 'E/R',
    '2000-1-DJ': 'Body',
    '7100-21': 'TMB',
    '7100-22': 'TMB',
    '7100-22R': 'TMB',
    '7100-22RS': 'TMB',
    '7100-25': 'TMB',
    '7100-25R': 'TMB',
    '7100-26': 'TMB',
    '7100-26R': 'TMB',
    '7100-26RS': 'TMB',
    '7100-28': 'TMB',
    '7100-28R': 'TMB',
    '7100-35': 'TMB',
    '7100-40': 'TMB',
    'IBEX': 'TMB',
    '9100-12': 'Body',
    '9100-DJ': 'Body',
    '2300-DJ': 'Body',
    '2500-DJ': 'Body',
    '10, 10S': 'Body',
    'C-1000-DJ': 'TMB',
    '4': 'Body',
    '5': 'TMB',
    '5D': 'TMB',
    '85A': 'TMB',
    'KRD-482-E': 'Body',
    'KRD-482-R': 'Body',
    '790196': 'Body',
    '790240': 'Body',
    'DRV 2-101KDJ': 'Body',
    'DRV 2-1-USA-DJ': 'Body',
    'DRV 2USA-DJ': 'Body',
    }

   

    const selectmodelEt = document.getElementById('modelEt');
    const slackmfg1 = document.getElementById('slackmfg1');
    const slackGroup1 = document.getElementById('slackGroup1');
    const slack_type1 = document.getElementById('slack_type1');
    const modelEtSeleccionada = selectmodelEt.value;

    if (modelEtSeleccionada) {
        slackmfg1.textContent = `${modelEt[modelEtSeleccionada]}`;
    } else {
        slackmfg1.textContent = '';
    }


    if (modelEtSeleccionada) {
        slackGroup1.textContent = `${slack_group[modelEtSeleccionada]}`;
    } else {
        slackGroup1.textContent = '';
    }

    if (modelEtSeleccionada) {
        slack_type1.textContent = `${slack_type[modelEtSeleccionada]}`;
    } else {
        slack_type1.textContent = '';
    }
}



/*------------------ Seccion de Slack Adjuster Intermediate Trucks------------------- */


function mostrar2() { /* id="modelEt" label Model */
    const modelIt = {
        '2000-DJ': 'Amsted',
        '2000-1-DJ': 'Amsted',
        '7100-21': 'Amsted',
        '7100-22': 'Amsted',
        '7100-22R': 'Amsted',
        '7100-22RS': 'Amsted',
        '7100-25': 'Amsted',
        '7100-25R': 'Amsted',
        '7100-26': 'Amsted',
        '7100-26R': 'Amsted',
        '7100-26RS': 'Amsted',
        '7100-28': 'Amsted',
        '7100-28R': 'Amsted',
        '7100-35': 'Amsted',
        '7100-40': 'Amsted',
        'IBEX': 'Amsted',
        '9100-12': 'Amsted',
        '9100-DJ': 'Amsted',
        '2300-DJ': 'Universal (Wab)',
        '2500-DJ': 'Universal (Wab)',
        '10, 10S': 'Universal (Wab)',
        'C-1000-DJ': 'Universal (Wab)',
        '4': 'Universal (Wab)',
        '5': 'Universal (Wab)',
        '5D': 'Universal (Wab)',
        '85A': 'Universal (Wab)',
        'KRD-482-E': 'NYAB',
        'KRD-482-R': 'NYAB',
        '790196': 'NYAB',
        '790240': 'NYAB',
        'DRV 2-101KDJ': 'American SAB',
        'DRV 2-1-USA-DJ': 'American SAB',
        'DRV 2USA-DJ': 'American SAB'
    };

    const slack_group2 = {
        '2000-DJ': 'E/R',
        '2000-1-DJ': 'E/R',
        '7100-21': 'L',
        '7100-22': 'N',
        '7100-22R': 'N',
        '7100-22RS': 'N',
        '7100-25': 'N',
        '7100-25R': 'N',
        '7100-26': 'N',
        '7100-26R': 'N',
        '7100-26RS': 'N',
        '7100-28': 'N',
        '7100-28R': 'N',
        '7100-35': 'Q',
        '7100-40': 'M',
        'IBEX': 'na',
        '9100-12': 'K',
        '9100-DJ': 'J',
        '2300-DJ': 'E',
        '2500-DJ': 'R',
        '10, 10S': 'K',
        'C-1000-DJ': 'O',
        '4': 'J',
        '5': 'L',
        '5D': 'M',
        '85A': 'P',
        'KRD-482-E': 'E',
        'KRD-482-R': 'R',
        '790196': 'R',
        '790240': 'R',
        'DRV 2-101KDJ': 'J',
        'DRV 2-1-USA-DJ': 'E',
        'DRV 2USA-DJ': 'E',
       
    };


    const slack_type = {
    '2000-DJ': 'E/R',
    '2000-1-DJ': 'Body',
    '7100-21': 'TMB',
    '7100-22': 'TMB',
    '7100-22R': 'TMB',
    '7100-22RS': 'TMB',
    '7100-25': 'TMB',
    '7100-25R': 'TMB',
    '7100-26': 'TMB',
    '7100-26R': 'TMB',
    '7100-26RS': 'TMB',
    '7100-28': 'TMB',
    '7100-28R': 'TMB',
    '7100-35': 'TMB',
    '7100-40': 'TMB',
    'IBEX': 'TMB',
    '9100-12': 'Body',
    '9100-DJ': 'Body',
    '2300-DJ': 'Body',
    '2500-DJ': 'Body',
    '10, 10S': 'Body',
    'C-1000-DJ': 'TMB',
    '4': 'Body',
    '5': 'TMB',
    '5D': 'TMB',
    '85A': 'TMB',
    'KRD-482-E': 'Body',
    'KRD-482-R': 'Body',
    '790196': 'Body',
    '790240': 'Body',
    'DRV 2-101KDJ': 'Body',
    'DRV 2-1-USA-DJ': 'Body',
    'DRV 2USA-DJ': 'Body',
    }

   

    const selectmodelIt = document.getElementById('modelIt');
    const slackmfg2 = document.getElementById('slackmfg2');
    const slackGroup3 = document.getElementById('slackGroup3');
    const slack_type2 = document.getElementById('slack_type2');
    const modelItSeleccionada = selectmodelIt.value;

    if (modelItSeleccionada) {
        slackmfg2.textContent = `${modelIt[modelItSeleccionada]}`;
    } else {
        slackmfg2.textContent = '';
    }


    if (modelItSeleccionada) {
        slackGroup3.textContent = `${slack_group2[modelItSeleccionada]}`;
    } else {
        slackGroup3.textContent = '';
    }

    if (modelItSeleccionada) {
        slack_type2.textContent = `${slack_type[modelItSeleccionada]}`;
    } else {
        slack_type2.textContent = '';
    }
}